import { NextRequest } from 'next/server';
import { ApiResponse } from '@/lib/response';
import { ApiError } from '@/lib/error';
import prisma from '@/lib/prisma';
import { AuthService } from '@/services/auth/auth.service';

export async function POST(req: NextRequest) {
  try {
    const { phoneNumber, password, role, name, skills } = await req.json();

    if (!phoneNumber || !password || !role) {
      throw ApiError.BadRequest('Missing required fields (phone, password, role)', 'MISSING_FIELDS');
    }

    // 1. Transactional User + Profile Creation
    const result = await prisma.$transaction(async (tx: any) => {
      // Check if user exists
      const existingUser = await tx.user.findUnique({
        where: { phoneNumber }
      });

      if (existingUser) {
        throw ApiError.BadRequest('User with this phone number already exists', 'USER_EXISTS');
      }

      // Hash password (AuthService would handle this in production)
      // For now, we use AuthService's existing JWT logic
      const user = await tx.user.create({
        data: {
          phoneNumber,
          password, // NOTE: In prod, use bcrypt/argon2 before saving
          role,
        }
      });

      // Role-specific profile creation
      if (role === 'WORKER') {
        await tx.workerProfile.create({
          data: {
            userId: user.id,
            name: name || 'Anonymous Worker',
            skills: skills || [],
            status: 'PENDING',
          }
        });
      } else if (role === 'EMPLOYER') {
        await tx.employerProfile.create({
          data: {
            userId: user.id,
            industryName: name || 'Private Employer',
          }
        });
      }

      // Generate JWT
      const token = await AuthService.signToken({
        userId: user.id,
        phoneNumber: user.phoneNumber,
        role: user.role as 'WORKER' | 'EMPLOYER' | 'ADMIN',
      });
      
      return { user: { id: user.id, phoneNumber: user.phoneNumber, role: user.role }, token };
    });

    return ApiResponse.success(result, 201);
  } catch (error) {
    return ApiResponse.error(error);
  }
}

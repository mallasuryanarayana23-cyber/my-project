import { NextRequest } from 'next/server';
import { ApiResponse } from '@/lib/response';
import { ApiError } from '@/lib/error';
import prisma from '@/lib/prisma';
import { AuthService } from '@/services/auth/auth.service';

export async function POST(req: NextRequest) {
  try {
    const { phoneNumber, otp } = await req.json();

    if (!phoneNumber || !otp) {
      throw ApiError.BadRequest('Missing phone number or OTP', 'MISSING_CREDENTIALS');
    }

    // 1. In production, we would verify against Redis/DB
    // For this prototype, we'll use a static OTP '1234'
    if (otp !== '1234') {
      throw ApiError.Unauthorized('Invalid OTP. Please use 1234 for testing.', 'INVALID_OTP');
    }

    // 2. Fetch User
    const user = await prisma.user.findUnique({
      where: { phoneNumber },
      include: {
        workerProfile: true,
        employerProfile: true
      }
    });

    if (!user) {
      throw ApiError.NotFound('No account found for this phone number. Please register first.', 'USER_NOT_FOUND');
    }

    // 3. Generate Session JWT
    const token = await AuthService.signToken({
      userId: user.id,
      phoneNumber: user.phoneNumber,
      role: user.role as 'WORKER' | 'EMPLOYER' | 'ADMIN',
    });

    return ApiResponse.success({
      user: {
        id: user.id,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.role === 'WORKER' ? user.workerProfile : user.employerProfile
      },
      token
    });
  } catch (error) {
    return ApiResponse.error(error);
  }
}

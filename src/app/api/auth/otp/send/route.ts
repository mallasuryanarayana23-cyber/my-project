import { NextRequest } from 'next/server';
import { ApiResponse } from '@/lib/response';
import { ApiError } from '@/lib/error';
import prisma from '@/lib/prisma';

/**
 * MOCK OTP SENDER
 * In production, this would integrate with Twilio or Msg91.
 */
export async function POST(req: NextRequest) {
  try {
    const { phoneNumber } = await req.json();

    if (!phoneNumber) {
      throw ApiError.BadRequest('Phone number is required', 'MISSING_PHONE');
    }

    // 1. Generate a mock OTP
    const mockOtp = '1234'; 

    // 2. Log to console for development
    console.log(`[AUTH] Generating OTP for ${phoneNumber}: ${mockOtp}`);

    // In a real scenario, we would store this in Redis or a DB with TTL
    // For this prototype, we'll return success and the frontend will use '1234'

    return ApiResponse.success({
      message: 'OTP sent successfully',
      phoneNumber,
      // NOTE: Never return the OTP in the response in production!
      // But for this quick fix, we'll keep it simple for the user.
      otp: mockOtp 
    });
  } catch (error) {
    return ApiResponse.error(error);
  }
}

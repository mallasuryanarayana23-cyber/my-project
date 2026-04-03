import { NextRequest } from 'next/server';
import { ApiResponse } from '@/lib/response';
import { ApiError } from '@/lib/error';
import { AdminService } from '@/services/admin/admin.service';
import { VerificationStatus } from '@prisma/client';

export async function PATCH(
  req: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status, adminNotes } = await req.json();

    if (!status || !['VERIFIED', 'REJECTED', 'PENDING', 'REVIEWING'].includes(status)) {
      throw ApiError.BadRequest('Invalid verification status provided', 'INVALID_STATUS');
    }

    // 1. Audit Worker Profile
    const updatedProfile = await AdminService.auditWorker(
      id, 
      status as VerificationStatus, 
      adminNotes
    );

    return ApiResponse.success({
      profileId: updatedProfile.id,
      newStatus: updatedProfile.status,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return ApiResponse.error(error);
  }
}

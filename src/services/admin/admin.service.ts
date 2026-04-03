import prisma from '@/lib/prisma';
import { VerificationStatus } from '@prisma/client';

export const AdminService = {
  async getPendingVerifications() {
    return prisma.workerProfile.findMany({
      where: {
        status: 'REVIEWING',
        videoUrl: { not: null },
      },
      orderBy: { updatedAt: 'asc' },
    });
  },

  async auditWorker(workerId: string, status: VerificationStatus, adminNotes?: string) {
    return prisma.workerProfile.update({
      where: { id: workerId },
      data: {
        status,
        // In a real production app, we would also log the adminNotes in a separate AuditLog table
      },
    });
  },

  async getPlatformStats() {
    const [totalWorkers, verifiedWorkers, totalJobs] = await Promise.all([
      prisma.workerProfile.count(),
      prisma.workerProfile.count({ where: { status: 'VERIFIED' } }),
      prisma.job.count(),
    ]);

    return { totalWorkers, verifiedWorkers, totalJobs };
  }
};

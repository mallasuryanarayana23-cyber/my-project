import prisma from '@/lib/prisma';
import { VerificationStatus } from '@prisma/client';

export const WorkerService = {
  async createProfile(userId: string, data: { name: string; skills: string[]; bio?: string; latitude: number; longitude: number }) {
    return prisma.$executeRaw`
      INSERT INTO "WorkerProfile" (
        id, "userId", name, skills, bio, location, status, rating, "reviewCount", "updatedAt"
      ) VALUES (
        gen_random_uuid(),
        ${userId},
        ${data.name},
        ${data.skills},
        ${data.bio || null},
        ST_SetSRID(ST_MakePoint(${data.longitude}, ${data.latitude}), 4326),
        'PENDING',
        0,
        0,
        NOW()
      )
    `;
  },

  async updateVideoUrl(userId: string, videoUrl: string) {
    return prisma.workerProfile.update({
      where: { userId },
      data: {
        videoUrl,
        status: 'REVIEWING',
      },
    });
  },

  async getProfile(userId: string) {
    return prisma.workerProfile.findUnique({
      where: { userId },
    });
  },

  async updateSkills(userId: string, skills: string[]) {
    return prisma.workerProfile.update({
      where: { userId },
      data: { skills },
    });
  }
};

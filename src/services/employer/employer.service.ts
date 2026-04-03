import prisma from '@/lib/prisma';

export const EmployerService = {
  async createProfile(userId: string, data: { name: string; industryName: string; latitude: number; longitude: number }) {
    return prisma.$executeRaw`
      INSERT INTO "EmployerProfile" (
        id, "userId", "industryName", location, "createdAt"
      ) VALUES (
        gen_random_uuid(),
        ${userId},
        ${data.industryName},
        ST_SetSRID(ST_MakePoint(${data.longitude}, ${data.latitude}), 4326),
        NOW()
      )
    `;
  },

  async postJob(employerId: string, data: { title: string; description: string; skillRequired: string; latitude?: number; longitude?: number }) {
    if (data.latitude && data.longitude) {
      return prisma.$executeRaw`
        INSERT INTO "Job" (
          id, "employerId", title, description, "skillRequired", location, "isActive", "createdAt"
        ) VALUES (
          gen_random_uuid(),
          ${employerId},
          ${data.title},
          ${data.description},
          ${data.skillRequired},
          ST_SetSRID(ST_MakePoint(${data.longitude}, ${data.latitude}), 4326),
          true,
          NOW()
        )
      `;
    }
    
    return prisma.job.create({
      data: {
        employerId,
        title: data.title,
        description: data.description,
        skillRequired: data.skillRequired,
        isActive: true,
      },
    });
  },

  async getMyJobs(employerId: string) {
    return prisma.job.findMany({
      where: { employerId },
      orderBy: { createdAt: 'desc' },
    });
  }
};

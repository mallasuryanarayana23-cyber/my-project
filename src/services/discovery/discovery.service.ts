import { Prisma } from '@prisma/client';
import prisma from '@/lib/prisma';

export interface DiscoveryParams {
  latitude: number;
  longitude: number;
  radiusInKm: number;
  skill?: string;
  limit?: number;
}

export const DiscoveryService = {
  async findNearbyWorkers({ latitude, longitude, radiusInKm, skill, limit = 10 }: DiscoveryParams) {
    const skillFilter = skill ? Prisma.sql`AND ${skill} = ANY(wp.skills)` : Prisma.empty;
    
    // We use PostGIS ST_DWithin for hyper-local performance
    const workers = await prisma.$queryRaw`
      SELECT 
        wp.id,
        wp.name,
        wp.bio,
        wp.skills,
        wp.rating,
        wp."reviewCount",
        wp.status,
        ST_Distance(
          wp.location::geography, 
          ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography
        ) as distance,
        wp."videoUrl"
      FROM "WorkerProfile" wp
      WHERE 
        ST_DWithin(
          wp.location::geography, 
          ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography, 
          ${radiusInKm * 1000}
        )
        AND wp.status = 'VERIFIED'
        ${skillFilter}
      ORDER BY distance ASC
      LIMIT ${limit}
    `;

    return workers;
  },


  async getWorkerDetails(id: string) {
    return prisma.workerProfile.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            phoneNumber: true
          }
        }
      }
    });
  }
};

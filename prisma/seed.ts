import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 SkillMap: Seeding Industrial Hubs (Delhi-NCR, Bengaluru)...');

  // 1. Create a few Workers in Gurgaon (Industrial Hub)
  const worker1 = await prisma.user.create({
    data: {
      phoneNumber: '+919999999901',
      role: 'WORKER',
      workerProfile: {
        create: {
          name: 'Rajesh Kumar',
          skills: ['CNC Machine Op', 'Welding'],
          bio: '5+ years experience in auto-parts shop floor.',
          status: 'VERIFIED',
          rating: 4.8,
          reviewCount: 22,
          videoUrl: 'https://skillmap-assets.s3.amazonaws.com/samples/welding_demo.mp4',
        }
      }
    }
  });

  // Manually insert PostGIS location for Gurgaon (28.4595, 77.0266)
  await prisma.$executeRaw`
    UPDATE "WorkerProfile" 
    SET location = ST_SetSRID(ST_MakePoint(77.0266, 28.4595), 4326) 
    WHERE "userId" = ${worker1.id}
  `;

  const worker2 = await prisma.user.create({
    data: {
      phoneNumber: '+919999999902',
      role: 'WORKER',
      workerProfile: {
        create: {
          name: 'Suresh Varma',
          skills: ['Electrician', 'Solar Panel Install'],
          bio: 'Certified solar technician working in Okhla.',
          status: 'VERIFIED',
          rating: 4.5,
          reviewCount: 15,
          videoUrl: 'https://skillmap-assets.s3.amazonaws.com/samples/solar_demo.mp4',
        }
      }
    }
  });

  // Manually insert PostGIS location for Okhla (28.5355, 77.2639)
  await prisma.$executeRaw`
    UPDATE "WorkerProfile" 
    SET location = ST_SetSRID(ST_MakePoint(77.2639, 28.5355), 4326) 
    WHERE "userId" = ${worker2.id}
  `;

  // 2. Create an Employer in Peenya, Bengaluru (13.0285, 77.5197)
  const employer1 = await prisma.user.create({
    data: {
      phoneNumber: '+919999999903',
      role: 'EMPLOYER',
      employerProfile: {
        create: {
          industryName: 'Precision Tools Pvt Ltd',
        }
      }
    }
  });

  await prisma.$executeRaw`
    UPDATE "EmployerProfile" 
    SET location = ST_SetSRID(ST_MakePoint(77.5197, 13.0285), 4326) 
    WHERE "userId" = ${employer1.id}
  `;

  console.log('✅ SkillMap Seeding Complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

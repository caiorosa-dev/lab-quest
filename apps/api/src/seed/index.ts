import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.upsert({
    where: {
      email: 'contact@caiorosadev.com',
    },
    update: {
      role: 'developer',
    },
    create: {
      email: 'contact@caiorosadev.com',
      name: 'Caio Rosa',
      password: await hash('admin', 11),
      role: 'developer',
    },
  });
}

export async function runDatabaseSeed() {
  await seed();

  console.log('Database seeded successfully :)');
}

runDatabaseSeed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });

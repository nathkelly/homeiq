// @ts-nocheck
import 'dotenv/config';
import { PrismaClient, UserRole } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Users
  const seb = await prisma.user.upsert({
    where: { email: 'seb@example.com' },
    update: {},
    create: {
      email: 'seb@example.com',
      password: 'test',
      firstName: 'Seb',
      lastName: 'Kelly',
      role: UserRole.CHILD,
    },
  })

  const eli = await prisma.user.upsert({
    where: { email: 'eli@example.com' },
    update: {},
    create: {
      email: 'eli@example.com',
      password: 'test',
      firstName: 'Eli',
      lastName: 'Kelly',
      role: UserRole.CHILD,
    },
  })

  const hazel = await prisma.user.upsert({
    where: { email: 'hazel@example.com' },
    update: {},
    create: {
      email: 'hazel@example.com',
      password: 'test',
      firstName: 'Hazel',
      lastName: 'Kelly',
      role: UserRole.CHILD,
    },
  })

  // Chores
  const dishes = await prisma.chore.create({
    data: {
      title: 'Dishes',
      description: 'Wash and stack dishes after dinner',
    },
  })

  const vacuum = await prisma.chore.create({
    data: {
      title: 'Vacuum',
      description: 'Vacuum the living area',
    },
  })

  const feedLucy = await prisma.chore.create({
    data: {
      title: 'Feed Lucy',
      description: 'Morning and evening feeds',
    },
  })

  // Assignments
  const weekStart = new Date('2025-04-14') // Monday of that week

  await prisma.choreAssignment.createMany({
    data: [
      { choreId: dishes.id, userId: seb.id, weekStart },
      { choreId: vacuum.id, userId: eli.id, weekStart },
      { choreId: feedLucy.id, userId: hazel.id, weekStart },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())

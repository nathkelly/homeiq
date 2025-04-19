import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { startOfWeek, endOfWeek } from 'date-fns';

const prisma = new PrismaClient()
const router = Router()

// POST /api/chore — create a new chore
router.post('/', async (req, res): Promise<void> => {
  const { title, description } = req.body

  if (!title) {
    res.status(400).json({ error: 'Title is required' })
    return
  }

  try {
    const chore = await prisma.chore.create({
      data: { title, description }
    })
    res.status(201).json(chore)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to create chore' })
  }
})

// GET /api/chore — get all chores
router.get('/', async (_, res): Promise<void> => {
  try {
    const chores = await prisma.chore.findMany()
    res.status(200).json(chores)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch chores' })
  }
})

// POST /api/chore/assign — assign a chore to a user
router.post('/assign', async (req, res): Promise<void> => {
  const { userEmail, choreTitle, weekStart } = req.body

  if (!userEmail || !choreTitle || !weekStart) {
    res.status(400).json({ error: 'Missing required fields' })
    return
  }

  try {
    const user = await prisma.user.findUnique({ where: { email: userEmail } })
    const chore = await prisma.chore.findFirst({ where: { title: choreTitle } })

    if (!user || !chore) {
      res.status(404).json({ error: 'User or Chore not found' })
      return
    }

    const assignment = await prisma.choreAssignment.create({
      data: {
        userId: user.id,
        choreId: chore.id,
        weekStart: new Date(weekStart)
      }
    })

    res.status(201).json(assignment)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to create assignment' })
  }
})

// GET /api/chore/assignments — get all assignments (with user + chore info)
router.get('/assignments', async (_, res): Promise<void> => {
  try {
    const assignments = await prisma.choreAssignment.findMany({
      include: {
        user: true,
        chore: true
      }
    })

    res.status(200).json(assignments)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch assignments' })
  }
})

router.get('/getWeekAssignments', async (req, res): Promise<void> => {
    try {
      const inputDate = req.query.weekStart
        ? new Date(req.query.weekStart as string)
        : new Date();
  
      const weekStart = startOfWeek(inputDate, { weekStartsOn: 1 }); // Monday
      const weekEnd = endOfWeek(inputDate, { weekStartsOn: 1 });     // Sunday
  
      const assignments = await prisma.choreAssignment.findMany({
        where: {
          weekStart: {
            gte: weekStart,
            lte: weekEnd,
          },
        },
        include: {
          chore: true,
          user: true,
        },
      });
  
      res.status(200).json(assignments);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch chore assignments' });
    }
  });

export default router

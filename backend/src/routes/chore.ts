import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Get all chores
router.get('/', async (_req: Request, res: Response) => {
  try {
    const chores = await prisma.chore.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(chores);
  } catch (err) {
    console.error('Failed to fetch chores', err);
    res.status(500).json({ error: 'Failed to fetch chores' });
  }
});

// Create a new chore
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { title, description, dueDate } = req.body;

  if (!title) {
    res.status(400).json({ error: 'Title and content are required' });
    return;
  }

  try {
    const newChore = await prisma.chore.create({
      data: {
        title,
        description,
        dueDate: dueDate ? new Date(dueDate) : undefined,
      },
    });
    res.status(201).json(newChore);
  } catch (err) {
    console.error('Failed to create chore', err);
    res.status(500).json({ error: 'Failed to create chore' });
  }
});

export default router;

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

// Create a singleton instance of PrismaClient
// This avoids connection issues during hot reloads in development
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // For development, reuse the client to avoid multiple connections
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // This is correctly at the top before routes

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from HomeIQ backend!' });
});

// Example route to get journal entries
app.get('/api/journal', async (req: Request, res: Response) => {
  try {
    const entries = await prisma.journalEntry.findMany();
    res.json(entries);
  } catch (error) {
    console.error('Error fetching journal entries:', error);
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
});

app.post(
  '/api/journal',
  async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    const { title, content } = req.body;

    if (!title || !content) {
      res.status(400).json({ error: 'Title and content are required' });
      return;
    }

    try {
      const entry = await prisma.journalEntry.create({
        data: { title, content },
      });
      res.status(201).json(entry);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create entry' });
    }
  }
);

// Graceful shutdown - Close Prisma connection when app terminates
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

app.listen(port, () => {
  console.log(`HomeIQ backend listening at http://localhost:${port}`);
});
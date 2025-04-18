import express, { Request, Response } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import choreRoutes from './routes/chore';

const app = express();
const port = process.env.PORT || 3001;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/hello', (_req: Request, res: Response) => {
  res.json({ message: 'Hello from HomeIQ backend!' });
});

app.use('/api/chore', choreRoutes);

app.listen(port, () => {
  console.log(`HomeIQ backend listening at http://localhost:${port}`);
});

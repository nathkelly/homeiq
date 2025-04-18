"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Health check
app.get('/api/hello', (_req, res) => {
    res.json({ message: 'Hello from HomeIQ backend!' });
});
// GET journal entries
app.get('/api/journal', async (_req, res) => {
    try {
        const entries = await prisma.journalEntry.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json(entries);
    }
    catch (err) {
        console.error('Error fetching journal entries:', err);
        res.status(500).json({ error: 'Failed to fetch entries' });
    }
});
// POST journal entry
app.post('/api/journal', async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        res.status(400).json({ error: 'Title and content are required' });
        return;
    }
    try {
        const newEntry = await prisma.journalEntry.create({
            data: { title, content },
        });
        res.status(201).json(newEntry);
    }
    catch (err) {
        console.error('Error creating journal entry:', err);
        res.status(500).json({ error: 'Failed to create entry' });
    }
});
app.listen(port, () => {
    console.log(`HomeIQ backend listening at http://localhost:${port}`);
});

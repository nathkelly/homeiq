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
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // Make sure this is at the top before any routes
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from HomeIQ backend!' });
});
const prisma = new client_1.PrismaClient();
// Example route to get journal entries
app.get('/api/journal', async (req, res) => {
    const entries = await prisma.journalEntry.findMany();
    res.json(entries);
});
app.post('/api/journal', async function (req, res, next) {
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
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create entry' });
    }
});
app.listen(port, () => {
    console.log(`HomeIQ backend listening at http://localhost:${port}`);
});

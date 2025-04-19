"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    const { email, password, firstName, lastName, role } = req.body;
    if (!email || !password || !firstName || !lastName) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }
    try {
        const user = await prisma.user.create({
            data: { email, password, firstName, lastName, role }
        });
        res.status(201).json(user);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create user' });
    }
});
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                chores: {
                    include: {
                        chore: true
                    }
                }
            }
        });
        res.json(users);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routes/user"));
const chore_1 = __importDefault(require("./routes/chore"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
app.use(express_1.default.json());
app.get('/api/hello', (_, res) => {
    res.json({ message: 'Hello from HomeIQ backend!' });
});
app.use('/api/user', user_1.default);
app.use('/api/chore', chore_1.default);
app.listen(port, () => {
    console.log(`HomeIQ backend running on http://localhost:${port}`);
});

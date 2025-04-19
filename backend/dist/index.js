"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const user_1 = __importDefault(require("./routes/user"));
const chore_1 = __importDefault(require("./routes/chore"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// allow both localhost:3000 and 192.168.0.2:3000 origins
const allowedOrigins = [
    'http://localhost:3000',
    'http://192.168.0.2:3000' // ← your PC’s LAN IP
];
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        // allow requests with no origin (mobile apps, curl, postman)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.includes(origin))
            return callback(null, true);
        callback(new Error(`CORS policy blocked: ${origin}`));
    }
}));
app.use(express_1.default.json());
app.use('/api/user', user_1.default);
app.use('/api/chore', chore_1.default);
app.listen(port, () => {
    console.log(`HomeIQ backend running on http://localhost:${port}`);
});

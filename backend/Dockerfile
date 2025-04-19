# Stage 1: Build
FROM node:18 AS builder
WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

COPY backend/package*.json ./
RUN npm install

COPY backend .

RUN npx prisma generate --schema=./prisma/schema.prisma
RUN npm run build

# Stage 2: Runtime
FROM node:18-slim AS runner
WORKDIR /app

# Reinstall only production deps
COPY backend/package*.json ./
RUN npm install --omit=dev

# Copy built app from builder (without overwriting node_modules)
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.env ./.env

CMD ["node", "dist/index.js"]

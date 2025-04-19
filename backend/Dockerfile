# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

# Install dependencies
COPY backend/package*.json ./
RUN npm install

# Copy all backend source
COPY backend .

# Generate Prisma client
RUN npx prisma generate --schema=./prisma/schema.prisma

# Build the TypeScript code if needed (optional)
# RUN npm run build

# Stage 2: Runtime
FROM node:18-slim AS runner

WORKDIR /app

# Only copy built app and dependencies (omit dev tools)
COPY --from=builder /app /app
COPY --from=builder /app/node_modules ./node_modules

# Optionally run migration and seed (uncomment if you want this built-in)
# RUN npx prisma migrate deploy --schema=./prisma/schema.prisma && \
#     npx ts-node prisma/seed.ts

# Start the server
CMD ["npm", "run", "start"]

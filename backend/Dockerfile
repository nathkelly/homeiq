# syntax=docker/dockerfile:1

############################################
# Stage 1: build + generate Prisma client #
############################################
FROM node:20-alpine AS builder
WORKDIR /app

# 1) Install all dependencies (incl. Prisma CLI)
COPY package.json package-lock.json ./
RUN npm ci

# 2) Copy Prisma schema + env, then inspect & generate
COPY prisma   ./prisma
COPY .env     .env

# ── DEBUG: verify files and env var ───────────────────────────────────────────────
RUN echo "⏱  /app contents:" \
    && ls -R /app \
    && echo "⏱  .env contents:" \
    && cat .env

# ── DEBUG: generate and peek at the client stub/header ───────────────────────────
RUN echo "⏱  Running prisma generate…" \
    && npx prisma generate \
    && echo "⏱  First 15 lines of default.js:" \
    && head -n 15 node_modules/.prisma/client/default.js

# 3) Copy source & compile
COPY tsconfig.json ./
COPY src           ./src
RUN npm run build


##################################
# Stage 2: final runtime image   #
##################################
FROM node:20-alpine
WORKDIR /app

# 1) Install only production deps
COPY --from=builder /app/package.json      ./
COPY --from=builder /app/package-lock.json ./
RUN npm ci --omit=dev

# 2) Copy in your compiled app + generated client
COPY --from=builder /app/dist         ./dist
COPY --from=builder /app/node_modules ./node_modules

# 3) Launch
EXPOSE 3001
CMD ["node", "dist/index.js"]

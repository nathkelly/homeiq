#######################################
# Stage 1: Build + generate Prisma
#######################################
FROM node:20-alpine AS builder
WORKDIR /app

# 1) Install deps (including @prisma/client)
COPY package*.json ./
RUN npm ci

# 2) Copy schema + env, then generate
COPY prisma     ./prisma
COPY .env       .env
RUN npx prisma generate

# 3) Copy the rest of your source & build
COPY tsconfig.json ./
COPY src           ./src
RUN npm run build


#######################################
# Stage 2: Final runtime image
#######################################
FROM node:20-alpine
WORKDIR /app

# 1) Copy package.json to get production deps…
COPY package*.json ./
RUN npm ci --production

# 2) Pull in the built JS and the already‑generated Prisma client
COPY --from=builder /app/dist          ./dist
COPY --from=builder /app/node_modules  ./node_modules
# (optional) if you need migrations at runtime:
# COPY --from=builder /app/prisma      ./prisma

CMD ["node", "dist/index.js"]

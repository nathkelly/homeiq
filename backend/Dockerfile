FROM node:20

WORKDIR /app

# Copy package files and prisma directory first
COPY package*.json ./
COPY prisma ./prisma

# Install dependencies
RUN npm install

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Build your application
RUN npm run build

# Make sure your DATABASE_URL environment variable is accessible
# You can either define it here or pass it when running the container

# Start the application
CMD ["node", "dist/index.js"]
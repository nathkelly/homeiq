FROM node:20-bullseye

# Install build dependencies for native modules
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./

ENV npm_config_build_from_source=true

RUN npm install --force

# Copy the rest of the app
COPY . .

# Expose port and run dev server
EXPOSE 3000
CMD ["npm", "run", "dev"]

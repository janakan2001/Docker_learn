# FROM node:18-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["node", "index.js"]




######################################
# Stage 1: Build
######################################
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Optional: build step (if you use TypeScript, Babel, etc.)
# RUN npm run build

######################################
# Stage 2: Production
######################################
FROM node:18-alpine AS production

# Set working directory
WORKDIR /app

# Copy only node_modules and app code from build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app ./

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]

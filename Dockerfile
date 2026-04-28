# 1. Base image (official Node.js image)
FROM node:18-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy application source code
COPY . .

# 5. Expose application port
EXPOSE 3000

# 6. Run the application using npm start
CMD ["npm", "start"]

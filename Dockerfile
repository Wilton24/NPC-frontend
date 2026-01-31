# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the source code
COPY . .

# 5. Expose Vite's default port
EXPOSE 5173

# 6. Start Vite and force it to listen on all network interfaces
# This is crucial for Docker access
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY src/ ./src/
COPY public/ ./public/
COPY abi/ ./abi/

EXPOSE 3001

CMD ["node", "src/server.js"]

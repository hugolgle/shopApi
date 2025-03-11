FROM node:23-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npx prisma generate

EXPOSE 8000

CMD ["npm", "start"]
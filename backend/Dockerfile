FROM node:23-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

RUN npx prisma generate

EXPOSE 8000

CMD ["nodemon", "--watch", ".", "index.js"]
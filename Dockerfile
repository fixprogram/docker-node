FROM node:20.9.0

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

CMD ["npm", "run", "start"]
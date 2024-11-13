FROM node:21.7.3-alpine3.20

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
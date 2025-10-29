FROM node:22-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

RUN node swagger.js

EXPOSE 3001

CMD [ "npm", "run", "dev" ]
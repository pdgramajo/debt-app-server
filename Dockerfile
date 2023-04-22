FROM node:16-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "dev" ]
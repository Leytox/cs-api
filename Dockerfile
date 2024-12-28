FROM node

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]

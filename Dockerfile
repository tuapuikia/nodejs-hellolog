FROM node:slim

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT ["/usr/local/bin/node", "app.js"]

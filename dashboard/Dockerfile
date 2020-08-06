FROM node:alpine

WORKDIR /usr/app

RUN npm install -g serve

COPY . .

EXPOSE 5000

CMD [ "serve" ]
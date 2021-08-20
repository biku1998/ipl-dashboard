FROM node:14.16.1-alpine

# create app directory
WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm","start"]
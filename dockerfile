FROM node:lts-buster
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install

COPY . .
 
EXPOSE 4444
 
CMD ["npm", "run", "dev"]
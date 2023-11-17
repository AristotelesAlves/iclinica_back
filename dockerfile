FROM node:lts-buster
 
WORKDIR /usr/src/app
 
COPY package*.json ./

COPY prisma/schema.prisma ./
 
RUN npm install

RUN npx prisma generate

RUN npm install @prisma/client@latest

COPY tsconfig.json ./

COPY . .
 
EXPOSE 4444
 
CMD ["npm", "run", "dev"]
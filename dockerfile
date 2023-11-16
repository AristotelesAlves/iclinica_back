FROM node:lts-buster
 
WORKDIR /usr/src/app
 
COPY package*.json ./

COPY prisma/schema.prisma ./

COPY .env.production ./.env
 
RUN npm install

RUN npx prisma generate

RUN npx prisma migrate dev

COPY . .
 
EXPOSE 4444
 
CMD ["npm", "run", "dev"]
FROM node:lts-buster
 
WORKDIR /usr/src/app
 
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
 
# Install dependencies
RUN npm set progress=false \
    && npm config set depth 0 \
    && npm install \
    && npm i typescript \
    && npm uninstall bcrypt \
    && npm i bcrypt

RUN npm ci

COPY . /usr/src/app
 
EXPOSE 3000
 
CMD ["npm", "start"]
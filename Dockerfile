FROM node:13.12.0-alpine

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .
RUN npm install --silent

COPY . .

CMD ["npm", "start"]
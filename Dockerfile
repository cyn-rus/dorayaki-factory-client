FROM node:13.12.0-alpine

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .
RUN yarn install --silent

COPY . .

CMD ["yarn", "start"]
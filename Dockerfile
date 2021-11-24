FROM node:14

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .
RUN yarn install --silent

COPY . .

CMD ["yarn", "start"]
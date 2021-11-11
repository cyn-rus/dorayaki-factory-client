FROM node:13.12.0-alpine
# ENV NODE_ENV development

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .
RUN npm install --silent

COPY . .

# EXPOSE 3000

CMD ["npm", "start"]
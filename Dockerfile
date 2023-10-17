FROM node:18.18.2-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json","./"]

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
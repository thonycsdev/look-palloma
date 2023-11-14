FROM node

WORKDIR /app

COPY ./node_modules .
COPY . .
RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
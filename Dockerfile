FROM node:13.14.0

WORKDIR /

COPY /package.json .

RUN npm install
RUN npm install -g sequelize-cli

COPY / .

RUN git clone https://github.com/vishnubob/wait-for-it.git

EXPOSE 3000
# CMD ["npm", "run", "start"]
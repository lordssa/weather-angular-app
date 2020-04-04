FROM node:10.16.3 as node

RUN mkdir /usr/src/app 
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install
RUN npm run build --prod

CMD ng serve --host 0.0.0.0 --port 4200
FROM node
RUN mkdir /hello-heroku-nodejs
WORKDIR /hello-heroku-nodejs
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]
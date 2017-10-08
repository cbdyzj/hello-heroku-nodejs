FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
ENV NODE_ENV=develop
EXPOSE 3000
CMD ["node", "dist/main"]

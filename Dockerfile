FROM node:12-alpine

RUN npm i -g http-server
RUN mkdir website

COPY out /website

EXPOSE 80
CMD [ "http-server", "./website", "--gzip", "--utc" ]
FROM node:20-alpine AS build

WORKDIR /home/node/blog

RUN npm cache clean --force

COPY --chown=node:node package*.json ./

COPY --chown=node:node . .


RUN npm install

RUN npm run build --prod

USER node

FROM nginx:1.25.1-alpine-slim AS ngi

ENV ENDPOINT=http://localhost:3000

COPY --from=build /home/node/blog/dist/administration /usr/share/nginx/html

COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 4200
### Build
FROM beevelop/ionic:latest AS ionic
## Create app directory
WORKDIR /usr/src/app
#COPY www /usr/share/nginx/html

## Install app dependencies
## A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install -f

## Bundle app source
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN ionic build

EXPOSE 8100
ENTRYPOINT ["ionic"]
CMD ["serve", "-p 8100", "--external", "--no-open"]


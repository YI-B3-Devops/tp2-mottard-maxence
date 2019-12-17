FROM node:13.3-alpine
ENV PORT 3000

WORKDIR /home/node/app
RUN chown -R node:node /home/node/app
USER node

COPY package*.json ./
RUN yarn install
COPY . .

EXPOSE 3000
CMD ["yarn", "dev"]

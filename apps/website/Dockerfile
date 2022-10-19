# stage 1
FROM node:16.18 as BUILD

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn
RUN yarn build

# stage 2
FROM gcr.io/distroless/nodejs:16

WORKDIR /app

COPY --from=BUILD /app/node_modules ./node_modules
COPY ./dist ./dist
COPY ./server ./server

CMD ["server/server.mjs"]

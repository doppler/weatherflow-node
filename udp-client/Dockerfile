FROM node:current-alpine3.10 AS BUILD_IMAGE

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY . .

RUN yarn build

RUN npm prune --production

FROM node:current-alpine3.10

WORKDIR /usr/app

COPY --from=BUILD_IMAGE /usr/app/.env .
COPY --from=BUILD_IMAGE /usr/app/build ./build
COPY --from=BUILD_IMAGE /usr/app/node_modules ./node_modules

CMD [ "node", "build/index.js" ]

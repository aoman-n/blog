# build
FROM node:12.14.0-slim as build
WORKDIR /build-app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install

# run
FROM node:12.14.0-slim
EXPOSE 8000
WORKDIR /app
COPY --from=build /build-app/node_modules /app/node_modules
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
CMD ["yarn", "dev", "--host", "0.0.0.0" ]
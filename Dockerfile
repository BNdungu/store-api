FROM node:20
WORKDIR /app
COPY /src/package.json .
ARG NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --omit=dev; \
    fi


COPY ./src ./
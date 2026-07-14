FROM node:20-alpine AS builder

WORKDIR /rosales_juan_jose_ui_garden_build_checks

COPY package*.json ./

RUN HUSKY=0 npm ci

COPY . .

RUN npm run build-storybook


FROM node:20-alpine

WORKDIR /rosales_juan_jose_ui_garden_build_checks

RUN npm install -g http-server

COPY --from=builder \
  /rosales_juan_jose_ui_garden_build_checks/storybook-static \
  ./storybook-static

EXPOSE 8018

CMD ["http-server", "storybook-static", "-p", "8018", "-a", "0.0.0.0"]

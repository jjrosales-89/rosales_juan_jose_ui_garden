FROM node:20-alpine

WORKDIR /rosales_juan_jose_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build-storybook

RUN npm install -g http-server

EXPOSE 6006

CMD ["http-server", "storybook-static", "-p", "6006", "-a", "0.0.0.0"]

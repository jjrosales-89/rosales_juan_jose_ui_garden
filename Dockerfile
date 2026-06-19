FROM node:20-alpine

WORKDIR /rosales_juan_jose_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 6006

CMD ["npm", "run", "storybook", "--", "--host", "0.0.0.0"]

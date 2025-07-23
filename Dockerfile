FROM node:lts AS build

WORKDIR /app

# pre-copy/cache go.mod for pre-downloading dependencies and only redownloading them in subsequent builds if they change
COPY package.json package-lock.json ./
RUN apt update && apt upgrade -y && apt install -y ca-certificates && apt clean && npm install

COPY . .
RUN npm run build

ENV NODE_ENV=production
CMD ["node", "/app/lib/main.js"]

# React Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
# Alternatively, explicitly install the 'serve' package globally
RUN npm install -g serve
COPY . .
RUN npm run build
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
EXPOSE 3000

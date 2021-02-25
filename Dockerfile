FROM node:14-alpine

WORKDIR /app
COPY . .
RUN npm ci
ENTRYPOINT ["node"]
CMD ["-r", "esm", "src/server.js"]

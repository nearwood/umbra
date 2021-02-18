const fs = require('fs');

const { Server } = require('boardgame.io/server');
const { Umbra } = require('./Game');

const server = Server({
  games: [Umbra],
  https: process.env.TLS_CERT ? {
    cert: fs.readFileSync(process.env.TLS_CERT),
    key: fs.readFileSync(process.env.TLS_KEY),
  } : undefined
});

server.run(8443);

const fs = require('fs');

const { Server } = require('boardgame.io/server');
const { Umbra } = require('./Game');

const server = Server({
  games: [Umbra],
  https: {
    cert: fs.readFileSync('/etc/letsencrypt/live/ludos.dev/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/ludos.dev/privkey.pem'),
  }
});

server.run(8443);

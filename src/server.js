const { Server } = require('boardgame.io/server');
const { Umbra } = require('./Game');

const server = Server({ games: [Umbra] });

server.run(8080);

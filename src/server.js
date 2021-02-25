const fs = require('fs');

const { Server } = require('boardgame.io/server');
const { Umbra } = require('./Game');

const server = Server({
  games: [Umbra],
});

//This runs in a container behind a LB so it can be whatever port we want.
server.run(8080);

// Health check: GET :8080/games

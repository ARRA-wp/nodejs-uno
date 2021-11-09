const GameServer = require('./classes//GameServer.js');

// front/index.js
var gameServer = new GameServer(1337)
gameServer.run();


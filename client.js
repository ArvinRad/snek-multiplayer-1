process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

// Begin game
game.start()
const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text

  conn.setEncoding('utf8');
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: ARD');
  });
}
  module.exports = connect;

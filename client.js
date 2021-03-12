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

  conn.setEncoding('utf8');
  function estConnect() {
    conn.on("connect", () => {})
  }
  estConnect(console.log("Successfully connected to game server"));
  setTimeout(() => {
    estConnect(conn.write("move: up"))}, 1000)
  estConnect(conn.write('Name: ARD'));
  setTimeout(() => {
    let move = setInterval(() => {
    estConnect(conn.write("move: down"))}, 100)}, 1100);
  setTimeout(() => {
      clearInterval(move)}, 4000)
}

module.exports = connect;

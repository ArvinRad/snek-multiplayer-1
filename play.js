const net = require('net');
/**
 * Establishes connection with the game server
 */
const server = net.createServer();
const  connect = require('./client');
server.on('connection', (client) => {
   client.setEncoding('utf8'); // interpret data as text
   client.on('data', (data) => {
   console.log('Message from client: ', data)
   });
  //  client.on('data', (data) => {
  //  console.log('Message from client: ', data)
  //   });
});
console.log('Connecting ...');
connect();


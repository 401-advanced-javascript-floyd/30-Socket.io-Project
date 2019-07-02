const eventHub = require('./hub');


const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000');

socket.on('spoken', data => {
  console.log('LOG spoken', data);
});
socket.on('speak', data => {
  console.log('speak test', data);
});
socket.on('save', (payload) => {
  console.log('LOG save', payload);
})

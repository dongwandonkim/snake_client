const {connect} = require('./client');
const {setupInput} = require('./input');
// establishes a connection with the game server

console.log('Connecting ...');
let con = connect();

// setup interface to handle user input from stdin
setupInput(con);

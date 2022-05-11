// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  switch (key) {
    case 'w':
      connection.write('Move: up');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'a':
      connection.write('Move: left');
      break;

    case 'd':
      connection.write('Move: right');
      break;
    default:
      console.log('default');
  }
  if (key === '\u0003') {
    console.log('bye');
    process.exit();
  }
};
module.exports = {setupInput};

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

const msg = (key) => {
  const txt = ['hi', 'bye', 'yum yum'];

  if (key === 't') {
    connection.write(txt[0]);
  }
  if (key === 'u') {
    connection.write(txt[1]);
  }
  if (key === 'i') {
    connection.write(txt[2]);
  }
};

const handleUserInput = function (key) {
  // your code here
  msg(key);
  if (key === 'w') connection.write('Move: up');
  if (key === 's') connection.write('Move: down');
  if (key === 'a') connection.write('Move: left');
  if (key === 'd') connection.write('Move: right');

  if (key === '\u0003') {
    console.log('bye');
    process.exit();
  }
};

module.exports = {setupInput};

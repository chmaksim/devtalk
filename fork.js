const { fork } = require('child_process');

const forked = fork('child.js');

forked.on('message', (msg) => {
  console.log('Message from child', msg);
});

forked.on('disconnect', (msg) => {
  console.log('disc', msg);
});

forked.send({ hello: 'world' });
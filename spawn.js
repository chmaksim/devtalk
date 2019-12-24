const { spawn } = require('child_process');

// const child = spawn('cmd.exe', 'dir');
// //const child = spawn('find', ['.', '-type', 'f']);

// child.on('exit', function (code, signal) {
//     console.log('child process exited with ' +
//                 `code ${code} and signal ${signal}`);
// });
// child.stdout.on('data', (data) => {
//     console.log(`child stdout:\n${data}`);
// });
  
// child.stderr.on('data', (data) => {
//     console.error(`child stderr:\n${data}`);
// });


// const { spawn } = require('child_process');

// const child = spawn('wc');

// process.stdin.pipe(child.stdin)

// child.stdout.on('data', (data) => {
//   console.log(`child stdout:\n${data}`);
// });


// const { spawn } = require('child_process');

// const find = spawn('find', ['.', '-type', 'f']);
// const wc = spawn('wc', ['-l']);

// find.stdout.pipe(wc.stdin);

// wc.stdout.on('data', (data) => {
//   console.log(`Number of files ${data}`);
// });

const bat = spawn('node', ['child.js']);

bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.error(data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});

bat.on('disconnect', (code) => {
    console.log(`C11hild exited with code ${code}`);
  });
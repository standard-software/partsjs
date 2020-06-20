const path = require('path');

console.log('argstest.js');

console.log(process.argv.length);

for (let i = 2; i < process.argv.length; i += 1) {
  console.log(process.argv[i]);
  console.log(path.resolve(process.argv[i]));
}


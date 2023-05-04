// core module ---os , fs , path

const os = require('os')

console.log(os.arch());
console.log(os.version());
console.log(os.machine());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.freemem()/1024/1024/1024);
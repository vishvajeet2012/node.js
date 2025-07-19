/// TIMER  => Pending callbacks => idle, prepare -> poll -> check ->  close callbacks

const fs = require('fs');

const crypto = require('crypto'); // Fixed typo

console.log(`1 scritp  start 1`)

setTimeout(() => {
    console.log(`2 setTimeout 0s (macroTask)`);
}, 0);
setTimeout(() => {
    console.log(`2 setTimeout 0s (macroTask)`);
}, 0);

setImmediate(() => {
    console.log(`3 setImmediate 1 (ChECK)`);
})

Promise.resolve().then(() => {
    console.log(`4 promise resolved 1 (microTask)`);
})

process.nextTick(()=>{
    console.log(`5 process.nextTick 1 (microTask)`);
})

fs.readFile(__filename,()=>{
    console.log(`6 fs.readFile 1 (macroTask)`);
})

crypto.pbkdf2('secret', 'salt', 10000, 64, "sha512", (err, key) => { // Fixed typo
    if (err) throw err;
    console.log(`7 crypto.pbkdf2 operation (cpu     intensive task)`)})


    console.log(`script end `)
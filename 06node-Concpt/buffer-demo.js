/// objects f-> handle binnayr data
/// file system operation cryptography , image processging


const buffOne = Buffer.alloc(10); // allocate  buffer of 10 bytes
console.log(buffOne); // <Buffer 00 00 00 00 00 00 00 00 00 00>



const bufferFromString  =  Buffer.from("Hello World"); // create buffer from string
console.log(bufferFromString); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>



const bufferFromArray = Buffer.from([1, 2, 3, 4, 5]); // create buffer from array
console.log(bufferFromArray); // <Buffer 01 02 03 04 05


buffOne.write("vishvajeet") // write to buffer
console.log("after writing node js to buffer one ", buffOne.toString()) // // after writing node js to buffer one  vishvajeet


console.log(bufferFromString[0]); // convert buffer to string
console.log(bufferFromString.slice(0,3)); // convert buffer to string

const concatBuffs = buffer.concat([buffOne, bufferFromString]); // concatenate buffers

console.log(concatBuffs.json()); // concatenate buffers to string
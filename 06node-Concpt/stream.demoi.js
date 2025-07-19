const fs = require('fs');
const crypto = require('crypto');
const zlib = require('zlib');
const { Transform } = require('stream'); // Fixed typo

class EncryptedStream extends Transform {
    constructor(key, vector) {
        super();
        this.key = key;
        this.vector = vector;
    }
    _transform(chunk, encoding, callback) {
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.vector);
        let encrypted = Buffer.concat([cipher.update(chunk), cipher.final()]);
        this.push(encrypted);
        callback();
    }
}

const key = crypto.randomBytes(32); // Generate a random key for AES-256
const vector = crypto.randomBytes(16); // Generate a random initialization vector
const readableStream = fs.createReadStream('input.txt'); // Readable stream from a file
const gzipStream = zlib.createGzip(); // Create a gzip stream for compression
const encryptedStream = new EncryptedStream(key, vector); // Pass both key and vector

const writableStream = fs.createWriteStream('output.txt.gz.enc'); // Writable stream to a file

// read => compress => encrypt => write
readableStream
    .pipe(gzipStream) // Compress the data
    .pipe(encryptedStream) // Encrypt the compressed data
    .pipe(writableStream) // Write the encrypted data to a file
   
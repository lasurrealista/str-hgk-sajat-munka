const { createReadStream, createWriteStream } = require('fs');
const { Transform } = require('stream');
const path = require('path');

// Oszály a transzformáláshoz.
class TitleCaseStream extends Transform {
    constructor() {
        super();
    }

    // A _transform metódus felel az átalakításért.
    _transform(chunk, enc, done) {
        // A chunk.toString azért kell, mert Buffert kapunk, ami nem 
        // karaktereket, hanem bájtokat tartalmaz.
        const output = chunk.toString('utf8').split(' ')
            .map(word => {
                return `${word[0].toUpperCase()}${word.slice(1)}`;
            })
            .join(' ');
        this.push(output);
        done();
    };
}

const readStream = createReadStream(
    path.join(__dirname, 'vers.txt'),
    {
        encoding: 'utf8',
        highWaterMark: 1024
    }
);

const writeStream = createWriteStream(
    path.join(__dirname, 'modositottVers.txt'),
    'utf8'
);

writeStream.on('finish', () => {
    console.log('File transform successful.');
});

readStream.pipe(new TitleCaseStream()).pipe(writeStream);
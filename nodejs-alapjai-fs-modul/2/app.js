const { unlink } = require('fs').promises;
const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path');
const { createGzip } = require('zlib');

// 1. Reads the source file.
const sourcePath = join(__dirname, 'settings.json');
const readSettings = createReadStream(
    sourcePath,
    { encoding: 'utf8' }
);

// 2. Writes the content of the source file to the target file.
const targetPath = join(__dirname, 'settings.json.bak');
const writeBak = createWriteStream(
    targetPath,
    { encoding: 'utf8' }
);

// 3. Reads the content of the target and zips it.
const readTarget = createReadStream(
    targetPath,
    { encoding: 'utf8' }
);

// 4. Writes the content of the gzipped settings to the .zip file.
const writeZip = createWriteStream(
    join(__dirname, 'settings.json.bak.gz'),
    { encoding: 'utf8' }
);

// read source -> write target -> compress target -> delete source and target
readSettings.pipe(writeBak);
writeBak.on('finish', () => {
    readTarget.pipe( createGzip() ).pipe(writeZip);
});

writeZip.on('finish', () => {
    unlink(sourcePath);
    unlink(targetPath);
});

/*
const fs = require('fs');
const { createReadStream } = require('fs');

const file = './README.md';

fs.open(file, 'w', function (err) {
    if (err) throw err;
    console.log('File created');
  });

fs.copyFile(file, `${file}.bak`, function (err) {
    if (err) throw err;
    console.log('File copied');
  });

  const readableStream = createReadStream(file, {
    encoding: 'utf8',
    highWaterMark: 512
  });

fs.unlink(`${file}.bak`, function(err) {
    if (err) throw err;
    console.log('Copied file deleted');
  });

fs.unlink(file, function(err) {
    if (err) throw err;
    console.log('File deleted');
  });

---

const { createReadStream, createWriteStream, unlink } = require('fs');
const { createGzip } = require('zlib');

const file = './README.md';
const copiedFile = `${file}.bak`;

const writeableStream = createWriteStream(copiedFile);
const compressedFile = createWriteStream(`${copiedFile}.gz`);

const readableStream = createReadStream(copiedFile, { encoding: 'utf8', highWaterMark: 512 });

readableStream
    .pipe(createGzip())
    .pipe(compressedFile);

unlink(copiedFile, function(err) {
    if (err) throw err;
    console.log('Copied file deleted');
  });
  
unlink(file, function(err) {
    if (err) throw err;
    console.log('Copied file deleted');
  });
*/

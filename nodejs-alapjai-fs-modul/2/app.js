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


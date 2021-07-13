const fsp = require('fs').promises;
const { join } = require('path');

const read = async () => {
    const jsonContent = await fsp.readFile(
        join('.', 'db', 'patients.json'),
        'utf8'
    );

    return JSON.parse(jsonContent);
};

module.exports = {
    read,
};
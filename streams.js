const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog1.txt', {enconding: 'uft8'});

readStream.on('data', (chunk) => {
    console.log('------- NEW CHUNK -------')
});
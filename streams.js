const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog1.txt', {enconding: 'uft8'});
const writeStream = fs.createWriteStream('./blog3.txt')


// aqui vai ler de um arquivo e passar pro outro
readStream.on('data', (chunk) => {
    console.log('------- NEW CHUNK -------')
    writeStream.write('\nNew Chunk\n');
    writeStream.write(chunk);
});

// piping

// esse código faz a mesma coisa que o anterior, mas em apenas uma linha (mais simples)
readStream.pipe(writeStream)
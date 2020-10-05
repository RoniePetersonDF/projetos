const fs = require('fs').promises

async function read() {
    const data = await fs.read(__dirname + '/lorem.txt', 'binary')
    return new Buffer.from(data)
}

try {
    read().then(data=> console.log(data))
} catch (error) {
    console.log(error)
}
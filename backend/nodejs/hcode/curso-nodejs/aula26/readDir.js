const fs = require('fs')

fs.readdir(__dirname, (err, data)=> {
    if(err) throw err
    data.forEach((value) => {
        console.log(__dirname + '\\' + value)

    })
})
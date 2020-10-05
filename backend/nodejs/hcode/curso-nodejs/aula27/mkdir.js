const fs = require('fs')
const assets = ['css', 'js', 'images', 'fonts', 'lib']

function make(dir) {
    dir.forEach(element => {
        fs.mkdir(__dirname + `/projetos/${element}`, {recursive:true}, (err)=> {
            if(err) throw err
            console.log('pasta criada com sucesso: ' + element)
        })        
    });
}

make(assets)

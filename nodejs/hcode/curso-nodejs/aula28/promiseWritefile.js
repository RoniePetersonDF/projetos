const { writeFile } = require('fs')

function criarArquivo(name, content) {
    return new Promise((resolve, reject) => {
        writeFile(name, content, err => {
            if(err) return reject(err)
            resolve()
        })
    })
}

criarArquivo(__dirname + '/promiseArquivo.txt', 'Criando arquivo usando promise')
.then(()=> console.log('Arquivo criado com sucesso'))
.catch(()=> console.log(err))
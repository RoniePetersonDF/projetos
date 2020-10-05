const {writeFile} = require('fs')

writeFile(__dirname + "/test.txt", 'Criando arquivo de texto com writeFile', err => {
    if(err) throw err
    console.log('Arquivo criado com sucesso')
})
const {promisify} = require('util')

const writeFile = promisify(require('fs').writeFile)

const conteudo = `Criando um arquivo utilizanod promisify do módulo nativo util`

writeFile(__dirname + '/utilArquivo.txt', conteudo).then(()=> {
    console.log('Arquivo criado dom sucesso')
}).catch((err)=>{
    console.log('Erro ao criar arquivo')    
})
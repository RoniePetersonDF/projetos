const path = require('path');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

const caminhoArquivo = path.resolve(__dirname, 'teste.json');
// const pessoas = [
//     { nome: 'João' },
//     { nome: 'Maria' },
//     { nome: 'Eduardo' },
//     { nome: 'Luisa' },
// ];

// const json = JSON.stringify(pessoas, '', 2);

// escrever(caminhoArquivo, json);


async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(value => {
        console.log(value);
    });
}

lerArquivo(caminhoArquivo);
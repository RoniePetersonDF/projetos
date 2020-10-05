// const fs = require('fs').promises;
// const path = require('path');

// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');
// const caminhoArquivo2 = path.resolve(__dirname, '..', 'teste.json');

// const dados = 'Frase 1\n';
// const pessoas = [
//     { nome: 'João' },
//     { nome: 'Maria' },
//     { nome: 'Eduardo' },
//     { nome: 'Luisa' },
// ];

// const json = JSON.stringify(pessoas, '', 2);
// fs.writeFile(caminhoArquivo, dados, { flag: 'a', encoding: 'utf-8'});
// fs.writeFile(caminhoArquivo2, json, { flag: 'w', encoding: 'utf-8'});

const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w'});
};
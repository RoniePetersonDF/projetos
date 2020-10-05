const nome ='Luiz';
const sobrenome = 'Miranda';

const falaNome = () => {
    console.log(nome, sobrenome);
}


// console.log(falaNome());
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

// console.log(exports);
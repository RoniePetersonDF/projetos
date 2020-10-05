const mod1 = require('./mod1');


// console.log(mod1.falaNome());

// const { nome, sobrenome, falaNome } = require('./mod1');

mod1.falaNome();

const { Pessoa } = require('./mod2');

const p1 = new Pessoa('Ronie');

console.log(p1);
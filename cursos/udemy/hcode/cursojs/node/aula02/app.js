// const multiplica = require('./mod1');

// console.log(multiplica(10,2));

const { Cachorro } = require('./Z/mod2');

const c1 = new Cachorro('Bob');

c1.latir();

const path = require('path');
console.log(path.resolve('./'));
console.log(__filename);
console.log(__dirname);

console.log('Exibindo uma mensagem no console!')

// console.error(new Error('Exibindo mensagem de erro'))
// console.error('Exibindo mensagem de erro')


const carros = ['GM', 'FIAT', 'FORD', 'VW', 'RENAULT', 'HONDA', 'HYUNDAI']

console.table(carros)

const dados = {
    name: 'Ronie',
    empresa: 'sedf'
}

console.table(dados)

console.time('contador')
for(let index=0; index < 1000; index++) {
    
}
console.timeEnd('contador')
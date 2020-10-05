// throw new Error('Ah não, deu erro! Não é possível, na minha máquina funciona!')

function execute() {
    executeTo()
}

function executeTo() {
    throw new Error('Ah não, deu erro! Não é possível, na minha máquina funciona!')
}

function init() {
    try {
        execute()
    } catch (error) {
        console.log(`Temos um problema - ${error.message}`)
    }
}

init()
console.log('Fim do arquivo')
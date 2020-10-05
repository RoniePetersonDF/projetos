const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let tempo;

iniciar.addEventListener('click', function(event){
    console.log('evento iniciar');
    clearInterval(tempo);
    tempo = setInterval(function() {
        const data = new Date();
        relogio.innerHTML = data.toLocaleTimeString('pt-Br', {
            hour12: false
        });
    }, 1000);
});

pausar.addEventListener('click', function(event){
    clearInterval(tempo);
    console.log('evento pausar');
});

zerar.addEventListener('click', function(event){
    console.log('evento zerar');
    clearInterval(tempo);
});
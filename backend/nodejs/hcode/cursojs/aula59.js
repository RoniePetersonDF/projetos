function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

setInterval(function() {
    console.log(mostrarHora());
}, 1000);

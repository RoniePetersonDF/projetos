class ValidarFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handlerSubmit(e);
        });
    }

    handlerSubmit(e) {
        e.preventDefault();
        
        console.log(1, e);
    }
}
const validar = new ValidarFormulario();
// const form1 = document.querySelector('.formulario');
// form1.addEventListener('submit', e => {
//     e.preventDefault();    
//     console.log(form1, 'teste');
// })

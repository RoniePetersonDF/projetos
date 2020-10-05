exports.paginaInicial = (req, res) => {
    // res.send(`
    //     <form action="/" method="post">
    //     Nome: <input type="text" name="nome">
    //     <button>Enviar Formulário</button>
    //     </form>
    // `); 
    res.render('index');   
};

exports.trataPost = (req, res) => {
    res.send(`Ei, sou sua nova rota de POST.`);
};
import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefa from './atualizar-tarefa';

describe('Teste do componente atualizar tarefa', () =>{

    it('deve renderizar o componente sem erro', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AtualizarTarefa id={1} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
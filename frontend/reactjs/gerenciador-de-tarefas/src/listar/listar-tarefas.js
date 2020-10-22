import React from 'react';
import { navigate, A } from 'hookrouter';


function ListarTarefas() {
    return (
        <A 
            href="/cadastrar" 
            className="btn btn-success btn-sm"
        >
        Nova Tarefa 
        </A>
    );
}

export default ListarTarefas;
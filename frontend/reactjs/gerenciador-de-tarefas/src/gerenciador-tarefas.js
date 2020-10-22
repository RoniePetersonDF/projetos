import React from 'react';
import './gerenciador-tarefas.css';
import { useRoutes } from 'hookrouter';

import ListarTarefas from './listar/listar-tarefas';
import CadastrarTarefa from './listar/cadastrar-tarefa';
import AtualizarTarefa from './listar/atualizar-tarefa';

const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefa />,
  '/atualizar/:id': ({id}) => <AtualizarTarefa id={id} />
};

function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;

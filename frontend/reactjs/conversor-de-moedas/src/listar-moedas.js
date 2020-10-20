import React from 'react';

function ListarMoedas() {
  const MOEDAS = [
    { "sigla": "AUD", "descricao": "Dolar Australiano"},
    { "sigla": "BRL", "descricao": "Real brasileiro"},
    { "sigla": "CAD", "descricao": "Dolar Canadense"},
    { "sigla": "CHF", "descricao": "Franco Suiço"},
    { "sigla": "EUR", "descricao": "Euro"},
    { "sigla": "GBP", "descricao": "Libra Esterlina"},
    { "sigla": "JPY", "descricao": "Iene Japonês"},
    { "sigla": "USD", "descricao": "Dolar Americano"},
  ];

  function compare(moeda1, moeda2) {
    if (moeda1.descricao < moeda2.descricao) {
      return -1;
    } else if (moeda1.descricao > moeda2.descricao) {
      return 1;
    }
    return 0;
  }

  return MOEDAS.sort(compare).map(moeda =>
    <option value={moeda.sigla} key={moeda.sigla}>
      {moeda.descricao}
    </option>
  );
}
export default ListarMoedas;

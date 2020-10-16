import React from 'react';
import { render } from '@testing-library/react';
import ConversorMoedas from './Conversor-moedas';

test('Deve renderizar a página sem erros', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

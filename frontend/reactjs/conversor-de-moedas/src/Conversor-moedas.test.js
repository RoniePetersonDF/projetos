import React from 'react';
import { render } from '@testing-library/react';
import ConversorMoedas from './Conversor-moedas';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

describe('Teste do componente de conversão de moedas', () => {
    it('Deve renderizar a página sem erros', () => {
      const { getByText } = render(<App />);
      const linkElement = getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });

    it('deve simular uma convesão de moedas', async () => {
      const { findByTestId, getByTestId } = render(<ConversorMoedas />);
      axiosMock.get.mockResolvedValueOnce({
          data: {success: true, rates: { BRL: 4.564292, USD: 1.101049 }}
      });
      fireEvent.click(getByTestId('btn-converter'));
      const modal = await findByTestId('modal');

      expect(axiosMock.get).toHaveBeenCalledTimes(1);
      expect(modal).toHaveTeXtContent('1 BRL = 0.24 USD');
    })
})

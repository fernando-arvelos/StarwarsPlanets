import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import mockData from '../helpers/mockData';
import Provider from '../context/Provider';
import userEvent from '@testing-library/user-event';



describe('Testa a requisição para o endpoint `/planets` da API de Star Wars', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockData)
      });
    });
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('Testa se ocorre uma requisição para a API', async () => {
    await act(async () => {
      render(
          <Provider>
          <App />
          </Provider>
          );
    });
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets/');
    
  });

  it('Testa se ocorre corretamente o filtro por nome', async () => {
    await act(async () => {
      render(
          <Provider>
          <App />
          </Provider>
          );
        });
      const input = screen.getByTestId('name-filter');
      userEvent.type(input, 'Tatooine');
      expect(input.value).toBe('Tatooine');
});

it('Testa se ao alterar o select, o valor é alterado', async () => {
  await act(async () => {
    render(
        <Provider>
        <App />
        </Provider>
        );
      });
    const selectColuns = screen.getByTestId('column-filter');
    userEvent.selectOptions(selectColuns, 'diameter');
    expect(selectColuns.value).toBe('diameter');

    const selectOperator = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(selectOperator, 'menor que');
    expect(selectOperator.value).toBe('menor que');

});

it('Testa se ocorre o filtro na condição "maior que" ', async () => {
     await act(async () => {
    render(
        <Provider>
        <App />
        </Provider>
        );
      });

      const selectColuns = screen.getByTestId('column-filter');
      userEvent.selectOptions(selectColuns, 'diameter');
      
       const selectOperator = screen.getByTestId('comparison-filter');
       userEvent.selectOptions(selectOperator, 'maior que');

       const input = screen.getByTestId('value-filter');
        userEvent.type(input, '9000');

        const button = screen.getByTestId('button-filter');
        userEvent.click(button);

        const lines = screen.getAllByRole('row')

        const filter = screen.getByTestId('filter');  
        expect(filter).toBeInTheDocument();
        expect(lines).toHaveLength(8);

        const elements = ['Tatooine', 'Alderaan', 'Yavin IV', 'Bespin', 'Naboo', 'Coruscant', 'Kamino']

        elements.forEach((elem) => {
          const name =  screen.getByText(elem);
          expect(name).toBeInTheDocument;
        })
    });

    it('Testa se ocorre o filtro na condição "menor que" ', async () => {
     await act(async () => {
    render(
        <Provider>
        <App />
        </Provider>
        );
      });

      const selectColuns = screen.getByTestId('column-filter');
      userEvent.selectOptions(selectColuns, 'population');
      
       const selectOperator = screen.getByTestId('comparison-filter');
       userEvent.selectOptions(selectOperator, 'menor que');

       const input = screen.getByTestId('value-filter');
        userEvent.type(input, '1000000');

        const button = screen.getByTestId('button-filter');
        userEvent.click(button);

        const filter = screen.getByTestId('filter');  
        expect(filter).toBeInTheDocument();

        const elements = ['Tatooine', 'Yavin IV']

        elements.forEach((elem) => {
          const name =  screen.getByText(elem);
          expect(name).toBeInTheDocument;
        })
    });

     it('Testa se ocorre o filtro na condição "igual a" ', async () => {
     await act(async () => {
    render(
        <Provider>
        <App />
        </Provider>
        );
      });

      const selectColuns = screen.getByTestId('column-filter');
      userEvent.selectOptions(selectColuns, 'rotation_period');
      
       const selectOperator = screen.getByTestId('comparison-filter');
       userEvent.selectOptions(selectOperator, 'igual a');

       const input = screen.getByTestId('value-filter');
        userEvent.type(input, '23');

        const button = screen.getByTestId('button-filter');
        userEvent.click(button);

        const filter = screen.getByTestId('filter');  
        expect(filter).toBeInTheDocument();

        const elements = ['Tatooine', 'Dagobah','Hoth']

        elements.forEach((elem) => {
          const name =  screen.getByText(elem);
          expect(name).toBeInTheDocument;
        })
    });   
});

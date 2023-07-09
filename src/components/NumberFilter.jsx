import React, { useContext, useState } from 'react';

import DataContext from '../context/UseContext';

export default function NumberFilter() {
  const initialColumns = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const { setFilteredData, filteredData, data } = useContext(DataContext);
  const [columns, setColumns] = useState(initialColumns);
  const [optionsColuns, setOptionsColuns] = useState('population');
  const [optionsOperator, setOptionsOperator] = useState('maior que');
  const [inputValue, setInputValue] = useState(0);
  const [deleteOptions, setDeleteOptions] = useState([]);
  console.log(deleteOptions);

  const operators = ['maior que', 'menor que', 'igual a'];

  const handleColumn = ({ target }) => {
    const { value } = target;
    setOptionsColuns(value);
  };

  const handleOperator = ({ target }) => {
    const { value } = target;
    setOptionsOperator(value);
  };

  const applyFilter = () => {
    const index = filteredData.length - 1;
    const array = filteredData.length > 0 ? filteredData[index] : data;

    const filtered = array.filter((planet) => {
      if (optionsOperator === 'maior que') {
        return Number(planet[optionsColuns]) > Number(inputValue);
      }
      if (optionsOperator === 'menor que') {
        return Number(planet[optionsColuns]) < Number(inputValue);
      }
      if (optionsOperator === 'igual a') {
        return Number(planet[optionsColuns]) === Number(inputValue);
      }
      return false;
    });

    const filterColumns = columns.filter((elem) => elem !== optionsColuns);

    setFilteredData((prev) => [...prev, filtered]);
    setDeleteOptions((prev) => [...prev, { optionsColuns, optionsOperator, inputValue }]);
    setColumns(filterColumns);
    setOptionsColuns(filterColumns[0]);
  };

  const handleValue = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };

  const deleteFilter = (option) => {
    const optionsFiltred = deleteOptions.filter((elem) => elem.optionsColuns !== option);
    setDeleteOptions(optionsFiltred);

    const index = filteredData.length - 1;
    const filtred = filteredData.filter((elem) => elem !== filteredData[index]);
    setFilteredData(filtred);

    const newColumns = columns;
    newColumns.push(option);
    setColumns(newColumns);
  };

  const removeAllFilters = () => {
    const filtred = [];
    setFilteredData(filtred);
    setDeleteOptions(filtred);
    setColumns(initialColumns);
  };

  return (
    <div>
      <label htmlFor="column">Coluna</label>
      <select
        name=""
        id="column"
        data-testid="column-filter"
        onChange={ handleColumn }
        value={ optionsColuns }
      >
        {columns.map((column) => (
          <option
            key={ column }
            value={ column }
          >
            {column}
          </option>
        ))}
      </select>
      <label htmlFor="operator">Operador</label>
      <select
        name=""
        id="operator"
        data-testid="comparison-filter"
        onChange={ handleOperator }
        value={ optionsOperator }
      >
        Operador
        { operators.map((operator) => (
          <option key={ operator } value={ operator }>{ operator }</option>
        ))}

      </select>
      <input
        type="number"
        name=""
        data-testid="value-filter"
        id=""
        value={ inputValue }
        onChange={ handleValue }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ applyFilter }
        disabled={ columns.length === 0 }
      >
        Adicionar filtro
      </button>
      {
        deleteOptions.map((option) => (
          <p
            key={ option.optionsColuns }
            data-testid="filter"
          >
            {`${option.optionsColuns} ${option.optionsOperator} ${option.inputValue} `}
            <button
              type="button"
              onClick={ () => deleteFilter(option.optionsColuns) }
            >
              X
            </button>
          </p>))
      }
      <button
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
        disabled={ deleteOptions.length === 0 }
      >
        Remover filtros

      </button>
    </div>
  );
}

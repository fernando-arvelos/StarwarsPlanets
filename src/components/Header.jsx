import React, { useContext, useEffect, useState } from 'react';
// import { BiSolidTrashAlt } from 'react-icons/bi';
import PlanetContext from '../context/PlanetContext';
import useFormInput from '../hooks/useFormInput';
import useFilterNumeric from '../hooks/useFilterNumeric';

function Header() {
  const { planets,
    setFilteredName,
    options,
    filterByNumericValues,
  } = useContext(PlanetContext);
  const [isLoading, setIsLoading] = useState(true);
  const columnFilter = useFormInput(options[0]);
  const comparisonFilter = useFormInput('maior que');
  const valueFilter = useFormInput(0);
  const buttonFilter = useFilterNumeric(
    columnFilter.value,
    comparisonFilter.value,
    valueFilter.value,
  );

  const { setValue } = columnFilter;
  useEffect(() => {
    setIsLoading(false);
    setValue(options[0]);
  }, [options, setValue]);

  const handleFilter = ({ target }) => {
    const { value } = target;
    const filter = planets.filter((planet) => planet.name
      .toLowerCase().includes(value.toLowerCase()));
    setFilteredName(filter);
  };
  console.log(columnFilter.value);

  return (
    <>
      <div>
        <input type="text" data-testid="name-filter" onChange={ handleFilter } />
      </div>
      <div>
        {!isLoading
        && (
          <label htmlFor="column-filter">
            Coluna
            <select
              data-testid="column-filter"
              id="column-filter"
              defaultValue={ columnFilter.value }
              onChange={ columnFilter.onChange }
            >
              {options.length > 0
            && options.map((option) => (
              <option key={ option }>{option}</option>
            ))}
            </select>
          </label>)}

        <label htmlFor="comparison-filter">
          Operador
          <select
            data-testid="comparison-filter"
            id="comparison-filter"
            defaultValue={ comparisonFilter.value }
            onChange={ comparisonFilter.onChange }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>

        <input
          data-testid="value-filter"
          type="number"
          defaultValue={ valueFilter.value }
          onChange={ valueFilter.onChange }
        />

        <button
          type="button"
          data-testid="button-filter"
          disabled={ options.length === 0 }
          onClick={ buttonFilter.onclick }
        >
          Filtrar
        </button>
      </div>
      <div>
        {filterByNumericValues.length > 0
        && filterByNumericValues.map((filter) => (
          <div key={ filter.column }>
            <span>{`${filter.column} `}</span>
            <span>{`${filter.comparison} `}</span>
            <span>{filter.value}</span>
            <button
              type="button"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Header;

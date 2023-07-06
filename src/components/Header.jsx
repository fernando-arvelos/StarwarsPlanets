import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../context/PlanetContext';
import useOptions from '../hooks/useOptions';
import useFormInput from '../hooks/useFormInput';
import useFilterNumeric from '../hooks/useFilterNumeric';

function Header() {
  const { planets, setFilteredName } = useContext(PlanetContext);
  const { options } = useOptions();
  const [isLoading, setIsLoading] = useState(true);
  const columnFilter = useFormInput('population');
  const comparisonFilter = useFormInput('maior que');
  const valueFilter = useFormInput(0);
  const buttonFilter = useFilterNumeric(
    columnFilter.value,
    comparisonFilter.value,
    valueFilter.value,
  );

  useEffect(() => {
    setIsLoading(false);
  }, [options]);

  const handleFilter = ({ target }) => {
    const { value } = target;
    const filter = planets.filter((planet) => planet.name
      .toLowerCase().includes(value.toLowerCase()));
    setFilteredName(filter);
  };

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
          onClick={ buttonFilter.onclick }
        >
          Filtrar
        </button>
        <div />
      </div>
    </>
  );
}

export default Header;

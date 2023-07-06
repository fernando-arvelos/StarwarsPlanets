import { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function useFilterNumeric(column, comparison, value) {
  const { planets,
    filteredNumber,
    setFilteredNumber,
    filterByNumericValues,
    setFilterByNumericValues,
    options,
    setOptions,
  } = useContext(PlanetContext);

  const handleClick = () => {
    const array = filteredNumber.length > 0 ? filteredNumber : planets;

    if (comparison === 'maior que') {
      const filter = array.filter((planet) => Number(planet[column]) > Number(value));
      setFilteredNumber(filter);
    }
    if (comparison === 'menor que') {
      const filter = array.filter((planet) => Number(planet[column]) < Number(value));
      setFilteredNumber(filter);
    }
    if (comparison === 'igual a') {
      const filter = array.filter((planet) => Number(planet[column]) === Number(value));
      setFilteredNumber(filter);
    }

    const newFilterByNumericValues = {
      column,
      comparison,
      value,
    };
    setFilterByNumericValues([...filterByNumericValues, newFilterByNumericValues]);

    const usedColumn = options.filter((option) => option !== column);
    setOptions(usedColumn);
  };

  return {
    onclick: handleClick,
  };
}

export default useFilterNumeric;

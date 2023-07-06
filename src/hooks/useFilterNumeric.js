import { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function useFilterNumeric(column, comparison, value) {
  const { planets, filteredNumber, setFilteredNumber } = useContext(PlanetContext);

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
  };

  return {
    onclick: handleClick,
  };
}

export default useFilterNumeric;

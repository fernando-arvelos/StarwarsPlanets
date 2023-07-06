import { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function useFilterNumeric(column, comparison, value) {
  const { planets, setFilteredNumber } = useContext(PlanetContext);

  const handleClick = () => {
    if (comparison === 'maior que') {
      const filter = planets.filter((planet) => Number(planet[column]) > Number(value));
      setFilteredNumber(filter);
    }
    if (comparison === 'menor que') {
      const filter = planets.filter((planet) => Number(planet[column]) < Number(value));
      setFilteredNumber(filter);
    }
    if (comparison === 'igual a') {
      const filter = planets.filter((planet) => Number(planet[column]) === Number(value));
      setFilteredNumber(filter);
    }
  };

  return {
    onclick: handleClick,
  };
}

export default useFilterNumeric;

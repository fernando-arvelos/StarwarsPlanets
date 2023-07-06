import { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function useOptions() {
  const { planets } = useContext(PlanetContext);
  const titles = planets.length > 0 && Object.keys(planets[0]);
  const options = titles.length > 0 && titles.filter((title) => ![
    'name', 'climate', 'terrain', 'gravity', 'films', 'created', 'edited', 'url',
  ].includes(title));

  return {
    options,
  };
}
export default useOptions;

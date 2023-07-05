import { useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';
import getPlanets from '../services/starWars-api';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredName, setFilteredName] = useState([]);

  useEffect(() => {
    const data = async () => {
      const response = await getPlanets();
      setPlanets(response);
      setLoading(false);
    };

    data();
  }, []);

  const store = useMemo(
    () => ({
      planets,
      loading,
      filteredName,
      setFilteredName,
    }),
    [planets, loading, filteredName],
  );

  return (
    <PlanetContext.Provider value={ store }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: node.isRequired,
};

export default PlanetProvider;

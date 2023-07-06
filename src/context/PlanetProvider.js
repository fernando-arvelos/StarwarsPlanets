import { useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';
import getPlanets from '../services/starWars-api';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredName, setFilteredName] = useState([]);
  const [filteredNumber, setFilteredNumber] = useState([]);
  console.log(filteredNumber);

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
      filteredNumber,
      setFilteredNumber,
      setFilteredName,
    }),
    [planets, loading, filteredName, filteredNumber],
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

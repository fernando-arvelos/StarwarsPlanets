import { useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';
import getPlanets from '../services/starWars-api';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState(['population', 'rotation_period',
    'orbital_period', 'diameter', 'surface_water']);
  const [filteredName, setFilteredName] = useState([]);
  const [filteredNumber, setFilteredNumber] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

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
      options,
      filteredName,
      filteredNumber,
      filterByNumericValues,
      setFilteredNumber,
      setFilteredName,
      setFilterByNumericValues,
      setOptions,
    }),
    [planets,
      loading,
      options,
      filteredName,
      filteredNumber,
      filterByNumericValues,
    ],
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

import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import DataContext from './UseContext';
import getPlanets from '../services/getPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const waitData = async () => {
      const response = await getPlanets();
      setLoading(false);
      setData(response.results);
    };
    waitData();
  }, []);

  const store = useMemo(() => ({
    data,
    loading,
    filteredData,
    setData,
    setLoading,
    setFilteredData,
  }), [data, loading, filteredData]);

  return (
    <DataContext.Provider value={ store }>
      { children }
    </DataContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;

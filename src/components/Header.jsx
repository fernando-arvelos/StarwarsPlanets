import React, { useContext } from 'react';
import DataContext from '../context/UseContext';
import NumberFilter from './NumberFilter';

export default function Header() {
  const { setFilteredData, data } = useContext(DataContext);

  const setInput = ({ target }) => {
    const { value } = target;
    const filtered = data.filter((planet) => planet.name.toLowerCase()
      .includes(value.toLowerCase()));
    setFilteredData([filtered]);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ setInput }
      />
      <NumberFilter />
    </div>
  );
}

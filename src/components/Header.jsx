import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const { planets, setFilteredName } = useContext(PlanetContext);

  const handleFilter = ({ target }) => {
    const { value } = target;
    const filter = planets
      .filter((planet) => planet.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredName(filter);
  };

  return (
    <div>
      <h1>Star Wars Planets</h1>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleFilter }
      />
    </div>
  );
}

export default Header;

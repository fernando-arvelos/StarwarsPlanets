import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import TableTd from './TableTd';

function Table() {
  const { planets } = useContext(PlanetContext);
  const titles = planets.length > 0 && Object.keys(planets[0]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {titles.map((title) => <th key={ title }>{title}</th>)}
          </tr>
        </thead>
        <TableTd />
      </table>
    </div>
  );
}

export default Table;

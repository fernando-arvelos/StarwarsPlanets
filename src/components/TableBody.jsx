import React, { useContext } from 'react';
import DataContext from '../context/UseContext';

function TableBody() {
  const { data, filteredData } = useContext(DataContext);
  const index = filteredData.length - 1;
  const array = filteredData.length > 0 ? filteredData[index] : data;

  return (
    <tbody>
      {
        array.map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))
      }
    </tbody>
  );
}

export default TableBody;

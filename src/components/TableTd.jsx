import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function TableTd() {
  const { planets, filteredName, filteredNumber } = useContext(PlanetContext);
  let filteredPlanets = planets;

  if (filteredName.length > 0) {
    filteredPlanets = filteredName;
  } else if (filteredNumber.length > 0) {
    filteredPlanets = filteredNumber;
  }

  return (
    <tbody>
      {filteredPlanets.map((planet) => (
        <tr key={ planet.name }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>))}
    </tbody>
  );
}

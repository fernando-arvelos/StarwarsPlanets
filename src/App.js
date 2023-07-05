import React, { useContext } from 'react';
import './App.css';
import PlanetContext from './context/PlanetContext';

function App() {
  const { planets, loading } = useContext(PlanetContext);
  const titles = planets.length > 0 && Object.keys(planets[0]);

  return (
    <div>
      {loading
        ? <span>Loading...</span>
        : (
          <div>
            <table>
              <thead>
                <tr>
                  {titles.map((title) => <th key={ title }>{title}</th>)}
                </tr>
              </thead>
              <tbody>
                {planets.map((planet) => (
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
            </table>
          </div>)}
    </div>
  );
}

export default App;

import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import PlanetContext from './context/PlanetContext';

function App() {
  const { loading } = useContext(PlanetContext);

  return (
    <div>
      <h1>Star Wars Planets</h1>
      {loading
        ? <span>Loading...</span>
        : (
          <div>
            <Header />
            <Table />
          </div>
        )}
    </div>
  );
}

export default App;

import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <Provider>
      <div>
        <Header />
        <Table />
      </div>
    </Provider>
  );
}

export default App;

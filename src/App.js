import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=> {
    
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={ ()=> window?.kompassifyLaunchTour('af76418b-ce71-4106-a38a-d5185fbd2010', 0, 3)}>clica aqui</button>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

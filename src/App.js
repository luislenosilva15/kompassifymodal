import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {


  useEffect(()=> {

    window?.kompassifyLaunchTour('04962af1-e082-4f23-bb8c-e0b603e58a77', 0, 1);
        
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

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

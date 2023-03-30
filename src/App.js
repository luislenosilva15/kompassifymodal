import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

//bf27e869-faa2-4427-ae52-c25a73fea247

  useEffect(()=> {

    window.addEventListener('message', function (event) {
      if (event.data.TYPE === "KOMPASSIFY_BOOT_LOADER_IS_READY") {
        // window?.kompassifyLaunchTour('04962af1-e082-4f23-bb8c-e0b603e58a77', 0, 1);
        window?.kompassifyProgressBar.startProgressPlayer('bf27e869-faa2-4427-ae52-c25a73fea247');
      }
  });
        
  }, [window.kompassifyProgressBar])
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

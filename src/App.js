import logo from './aneirin_logo.png';
import './App.css';

import Navbar from './Components/Navbar';
import Player from './Components/Player';
import Searchbar from './Components/Searchbar';

function App() {
  return (
    <>
      <img src={logo} id="logo" alt="logo" />
      <Searchbar/>
      <div className="appContainer">
        <Navbar />
        <Player />
      </div>
    </>
  );
}

export default App;

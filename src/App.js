
import './App.css';
import CountrySelector from './components/CountrySelector';
import Header from './components/Header';
import Stats from "./components/Stats"


function App() {
  return (
    <div className="App">
     <Header/>
     <h1>GLOBAL FIGURES</h1>
     <Stats url="https://covid19.mathdro.id/api"/>
     <CountrySelector/>
    </div>
  );
}

export default App;

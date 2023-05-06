import './App.css';
import './components/Banner.css';
import './components/Row.css';

import Banner from './components/Banner';
import Row from './components/Row';
import LargeRow from './components/LargeRow';

import requests from './request';

function App() {
  return (
    <div className="App">
      <Banner />
      
      <LargeRow title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="DEMONSLAYERFLIX ORIGINALS" fetchUrl={requests.fetchTrending} />
      <Row title="SCI-FI & FANTASY ANIME" fetchUrl={requests.fetchTrending} />
      <Row title="ADVENTURE" fetchUrl={requests.fetchTrending} />
      <Row title="ANIME ACTION" fetchUrl={requests.fetchTrending} />


    </div>
  );
}

export default App;

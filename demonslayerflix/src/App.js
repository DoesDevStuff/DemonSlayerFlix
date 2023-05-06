import './App.css';
import './components/Navbar.css';
import './components/Banner.css';
import './components/Row.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import RowLarge from './components/RowLarge';
import Footer from './components/Footer';
import requests from './request';

function App() {
  return (
    <div className="app">

      <Navbar />

      <Banner />

      <RowLarge title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="DEMONSLAYERFLIX ORIGINALS" fetchUrl={requests.fetchTrending} />
      <Row title="SHOUNEN ANIME" fetchUrl={requests.fetchTrending} />
      <Row title="SCI-FI & FANTASY" fetchUrl={requests.fetchTrending} />
      <Row title="ADVENTURE DARK FANTASY" fetchUrl={requests.fetchTrending} />
      <Row title="ANIME SERIES" fetchUrl={requests.fetchTrending} />
      <Row title="ANIME ACTION" fetchUrl={requests.fetchTrending} />

      <Footer />

    </div>
  );
}

export default App;

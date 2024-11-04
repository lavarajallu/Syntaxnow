import './App.css';
import './assets/css/header.css'
import './assets/css/banner.css'
import './assets/css/about.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Industries from './components/industries';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Banner />
        <About />
        <Industries />
      </Router>
    </div>
  );
}

export default App;

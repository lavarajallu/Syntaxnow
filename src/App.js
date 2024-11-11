import './App.css';
import './assets/css/header.css'
import './assets/css/banner.css'
import './assets/css/about.css'
import './assets/css/card.css'
import './assets/css/story.css'
import './assets/css/indus.css'
import './assets/css/careers.css'
import './assets/css/contact.css'
import './assets/css/blogs.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Industries from './components/industries';
import Story from './components/story';
import Blogs from './components/blogs';
import Careers from './components/careers';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Banner />
        <About />
        <Industries />
        <Story />
        <Blogs/>
        <Careers/>
        <Contact/>
      </Router>
    </div>
  );
}

export default App;

import Intro from './components/intro/Intro';
import Topbar from './components/topbar/Topbar';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Miniproject from './components/miniproject/Miniproject';
import './App.css'

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="all-components">
      <Intro/>
      <Portfolio/>
      <Miniproject/>
      <Skills/>
      <Contact/>
      <Footer/>
      </div> 
    </div>
  );
}

export default App;

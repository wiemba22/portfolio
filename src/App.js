import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Navbar  from './components/navbar';
import About from './components/about'; 
import Journey from './components/journey'
import Landing from './components/landing'
import Skills from './components/skills';
import Certif from './components/certificates'; 
import Contact from './components/contact'; 
import Projects  from './components/projects';


function App() {
  return (
    <BrowserRouter>
      <div className='bg-white w-full overflow-hidden'>
        <Navbar/>
        <Landing/>
        <About/>
        <Journey/>
        <Skills/>
        <Projects/>
        <Contact/>  
      </div>
    </BrowserRouter>
  );
}

export default App;
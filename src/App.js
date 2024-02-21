import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Navbar  from './components/navbar';
import About from './components/about'; 
import Journey from './components/journey'
import Landing from './components/landing'
import Skills from './components/skills';
import Certificates from './components/certificates';
import Contact from './components/contact'; 
import Projects  from './components/projects';
import React, { useState, useEffect } from 'react';
import Loader from './components/loader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    
    <BrowserRouter>
      <div className='bg-white w-full overflow-hidden'>
      <div className='bg-black z-50'> 
      {loading ? <Loader /> :null}
    </div>
    {!loading  && <>
        <Navbar/>
        <Landing/> 
        <About/>
        <Journey/>
        <Skills/>
        <Projects/>
        <Certificates/>
        <Contact/> </> }
      </div>
    </BrowserRouter>
  );
}

export default App;
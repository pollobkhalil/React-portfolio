
import React from 'react';
import Hero from './components/Hero';
import StarsCanvas from './components/StarsCanvas';
import Navbar from './components/Navbar';
import Consultancy from './components/Consultancy';
import './App.css';
import Gallery from './components/Gallery';
import About from './components/About';
import Biography from './components/Biography';




const App = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <StarsCanvas />
        <div className="content">
          <Hero />
          <Consultancy />
          <Gallery/>
          <About/>
          
          <Biography/>
          
        </div>
      </div>
    </>
  );
};

export default App;

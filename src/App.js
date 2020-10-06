import React from 'react';
import NavComponent from './NavComponent';
import Links from './Links';
import About from './About';
import Species from './Species';
import Features from './Features';
import Habitat from './Habitat';
import Image from './Image';
import './App.css';

function App() {
  return (
    <div>
      <NavComponent />
      <Links />
      <About />
      <Species />
      <Features />
      <Habitat />
      <br></br>
      <Image />
    </div>
  );
}

export default App;

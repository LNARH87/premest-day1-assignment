import React from 'react';
import NavComponent from './NavComponent';
import Links from './Links';
import About from './About';
import Species from './Species';
import Features from './Features';
import Habitat from './Habitat';
import Image from './Image';
import Video from './Video';
import RelatedContent from './RelatedContent';
import Address from './Address';
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
      <Image /><br></br><Video />
      <br></br>
      <RelatedContent />
      <br></br>
      <br></br>
      <Address />
    </div>
  );
}

export default App;

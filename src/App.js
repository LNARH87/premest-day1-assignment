import React from 'react';
import NavComponent from './NavComponent';
import Links from './Links';
import About from './About';
import Species from './Species';
import Features from './Features';
import './App.css';

function App() {
  return (
    <div>
      <NavComponent />
      <Links />
      <About />
      <Species />
      <Features />
    </div>
  );
}

export default App;

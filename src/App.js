import React from 'react';
import NavComponent from './NavComponent';
import Links from './Links';
import About from './About';
import Species from './Species';
import './App.css';

function App() {
  return (
    <div>
      <NavComponent />
      <Links />
      <About />
      <Species />
    </div>
  );
}

export default App;

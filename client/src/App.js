import React from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <Navigation/>
    
      </nav>
    </div>
  );
}

export default App;

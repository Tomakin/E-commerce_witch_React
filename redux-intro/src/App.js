import React from 'react';
import logo from './logo.svg';
import './App.css';
import counter from "./components/counter"
import decreaseCounter from "./components/decreaseCounter"
import increaseByTwoCounter from './components/increaseByTwoCounter';
import increaseCounter from './components/increaseCounter';


function App() {
  return (
    <div>
      <counter/>
      <increaseCounter/>
      <decreaseCounter/>
      <increaseByTwoCounter/>
    </div>
  );
}

export default App;

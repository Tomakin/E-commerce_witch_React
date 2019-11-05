import React from 'react';
import './App.css';
import Counter from "./components/Counter"
import DecreaseCounter from "./components/decreaseCounter"
import IncreaseByTwoCounter from './components/increaseByTwoCounter';
import IncreaseCounter from './components/increaseCounter';


function App() {
  return (
    <div>
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import CounterContext from './CounterContext';
import Parent from './Parent.js';

function App() {
   let countState = useState(1)  //[count, SetCount]
  
  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;

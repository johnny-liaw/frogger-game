import React from 'react';
import './App.css';
import Frogger from './components/Frogger.js';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Frogger</h1>
        <Frogger />
      </div>
    </RecoilRoot>
  );
}

export default App;

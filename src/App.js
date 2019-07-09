import React from 'react';
import './App.css';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';

function App() {
  return (
    <main className="App">
      <div>
        <Header />
        <MemeGenerator />
      </div>
    </main>
  );
}

export default App;

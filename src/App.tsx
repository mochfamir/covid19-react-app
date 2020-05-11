import React from 'react';
import './App.css';

import { Container } from './components/container/container';

function App() {
  const data: string = 'hoho';
  return (
    <div className="app">
      <h1>COVID-19 Overview</h1>
      <Container data={data} />
    </div>
  );
}

export default App;

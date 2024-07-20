import React from 'react';
import logo from './logo.png';
import './App.css';
import VaraText from './VaraText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <VaraText text='Automatic migration of your GCP Compute engine instance worked successfully!' />
        <p style={{fontSize: '12px', marginTop: '35px'}}>
          Automatic migration of your GCP Compute engine instance worked successfully!
        </p>
      </header>
    </div>
  );
}

export default App;

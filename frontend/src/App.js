import React from 'react';
import './App.css';

import logo from './assets/logo.svg'

import Routes from './routes'

function App() {
  

  return (
    <div className="container">
      <img src={logo} alt="AirCnc"/> {/* Tudo que for importado deve ser colocado entre chaves, comentários também */}

      <div className="content">
        <Routes/>
      </div>
    </div>
  );
}

export default App;

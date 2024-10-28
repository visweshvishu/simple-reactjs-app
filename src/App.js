import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';

const App = () => {
  console.log("Host URL: " + process.env.PUBLIC_URL);
  console.log("hello just it is installed");

  return (
    <div>
      <h1>jksndfkjndfjkndfnkjdfn</h1>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Simplegh React App</h1>
          </header>
          <Routes>
            <Route exact path="/" element={<Redirect to="/customerlist" />} />
            <Route path="/customerlist" element={<Customers />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

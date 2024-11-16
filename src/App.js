import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Navbar from './Navbar';
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setCurrentUser(null);
  };
  return (
    <Router>
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
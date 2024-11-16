import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  
  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('usersData')) || [];
    if (users.find((user) => user.email === email)) {
      alert('User already exists');
      return;
    }
    users.push({ name, email, password });
    localStorage.setItem('usersData', JSON.stringify(users));
    alert('Registration successful! You can now log in.');
    navigate('/login'); 
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="register-name">Name</label>
          <input
            type="text"
            className="form-control"
            id="register-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="register-email">Email</label>
          <input
            type="email"
            className="form-control"
            id="register-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="register-password">Password</label>
          <input
            type="password"
            className="form-control"
            id="register-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-custom w-100">Register</button>
      </form>
    </div>
  );
}
export default Register;
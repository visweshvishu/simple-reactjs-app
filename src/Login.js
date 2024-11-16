import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('usersData')) || [];
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      setCurrentUser(user);
      navigate('/'); // navigate to the home page after successful login
    } else {
      alert('Invalid credentials');
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            className="form-control"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            className="form-control"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-custom w-100">Login</button>
      </form>
    </div>
  );
}
export default Login;
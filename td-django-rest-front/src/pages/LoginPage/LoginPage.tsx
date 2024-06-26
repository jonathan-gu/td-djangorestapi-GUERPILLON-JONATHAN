import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    const get_expiration_date = localStorage.getItem('expiration_date')
    if (get_expiration_date) {
      if (new Date(get_expiration_date) > new Date()) {
        navigate('/researchers')
      }
    }
  }, [])


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.access)
      const expiration_date = new Date()
      expiration_date.setDate(expiration_date.getDate()+1)
      localStorage.setItem('expiration_date', expiration_date.toString())
      navigate('/researchers')
    } catch (err) {
      setError("Nom d'utilisateur ou mot de passe incorrect");
    }
  };

  return (
    <div className="login-form-container">
      <h2>Connexion</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Connexion</button>
      </form>
    </div>
  );
};

export default LoginForm;

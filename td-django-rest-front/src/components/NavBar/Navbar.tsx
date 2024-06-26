import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">My Research App</h1>
      <ul className="navbar-links">
        <li><Link to="/researchers">Chercheurs</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/publications">Publications</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header className="nav-bar">
    <nav className="nav-links">
      <h1 className="Heading"> Math Magicians </h1>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/Statement">Statement</Link>
    </nav>
  </header>
);

export default Nav;

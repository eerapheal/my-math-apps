import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <header className="nav-bar">
    <nav className={styles.navItems}>
      <h1 className={styles.logo}> Math Magicians </h1>
      <div className={styles.navList}>
        <Link className={styles.navLinks} to="/">Home</Link>
        <Link className={styles.navLinks} to="/calculator">Calculator</Link>
        <Link className={styles.navLinks} to="/Statement">Statement</Link>
      </div>
    </nav>
  </header>
);

export default Nav;

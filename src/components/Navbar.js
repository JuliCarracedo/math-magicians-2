import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2> MATH MAGICIANS</h2>
    <div className="links">
      <Link to="/"> Home </Link>
      <Link to="/calc"> Calculator </Link>
      <Link to="/quote"> Quote </Link>
    </div>
  </nav>
);

export default Navbar;

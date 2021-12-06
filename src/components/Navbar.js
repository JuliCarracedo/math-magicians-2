import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2> MATH MAGICIANS</h2>
    <div className="links">
      <Link to="/" className="link"> Home </Link>
      <Link to="/calc" className="link"> Calculator </Link>
      <Link to="/quote" className="link"> Quote </Link>
    </div>
  </nav>
);

export default Navbar;

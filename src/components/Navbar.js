import { input } from '@testing-library/user-event/dist/cjs/event/input.js';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default Navbar;

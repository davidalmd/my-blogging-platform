import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Blogging Platform</h1>
      <Link to="/blog">Go to Blog</Link>
    </div>
  );
};

export default Home;

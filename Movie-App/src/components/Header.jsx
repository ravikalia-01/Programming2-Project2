import React from 'react';
import { Link } from 'react-router-dom';  // For routing

const Header = () => {
  return (
    <header className="header">
      <div className='site'>
      <img src="/logo.png" alt="Movie App Logo" className="logo" />
      <h1>Movie App</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/add-movie">Add Movie</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

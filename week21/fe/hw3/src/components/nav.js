import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Blog</Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/articles" className="nav-item nav-link active">Articles</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
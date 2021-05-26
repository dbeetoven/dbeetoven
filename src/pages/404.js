import React from 'react';
import { Link } from 'gatsby';

const NotFound = () => (
  <div id="notfound">
    <div className="notfound">
      <div className="notfound-404">
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
      <Link to="/">HomePage</Link>!
    </div>
  </div>
);

export default NotFound;

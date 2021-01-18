/* eslint-disable react/prop-types */
import React from 'react';

const Nav = () => (
  <div className="navbar__container navbar__flex">
    <h1 className="navbar__logo">Dbeetoven</h1>
    <nav>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link" href="index.html">
            About
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="index.html">
            Experience
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="index.html">
            Skills
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;

/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';

const Navigation = ({ title, setToggleNav, toggleNav }) => (
  <>
    <header className="site-head">
      <div id="menu" className="site-head-container">
        <Link className="nav-burger" to={`#menu`} onClick={() => setToggleNav(!toggleNav)}>
          <div
            className="hamburger hamburger--collapse"
            aria-label="Menu"
            role="button"
            aria-controls="navigation">
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>{' '}
            <div className="hamburger-text-menu-text hidden">Menu</div>
          </div>
        </Link>
        <nav id="swup" className="site-head-left">
          <ul className="nav" role="menu">
            <li className="nav-home nav-current" role="menuitem">
              <Link to="/" className="text-title">
                Home
              </Link>
            </li>
            <li className="nav-about" role="menuitem">
              <Link to="/about" className="text-title">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="site-head-center">
          <Link to="/" className="site-head-logo text-title" alt="Beetoven D.">
            {title}
          </Link>
        </div>
        <div className="site-head-right">
          <Link to="https://www.linkedin.com/in/dbeetoven/" target="_blank" className="text-title">
            <FiLinkedin accentHeight="20" />
          </Link>
          <div className="social-links">
            <Link to="/" className="text-title">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Navigation;

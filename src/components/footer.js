import React, { Fragment } from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <>
    <footer className="site-foot footer">
      &copy; {new Date().getFullYear()}{' '}
      <Link className="copyright" to="/">
        Beetoven D.
      </Link>
    </footer>
  </>
);

export default Footer;

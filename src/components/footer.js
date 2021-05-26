import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram';
import { FaDev } from '@react-icons/all-files/fa/FaDev';
const Footer = () => (
  <>
    <footer className="site-foot footer">
      <div className="follow-me">
        <p className="label">Follow Me</p>
        <ul className="follow-me--links">
          <li className="social-link">
            <Link className="link" href="/">
              <FiTwitter />
            </Link>
          </li>
          <li className="social-link">
            <Link className="link" href="/">
              <FiInstagram />
            </Link>
          </li>
          <li className="social-link">
            <Link className="link" href="/">
              <FiLinkedin />
            </Link>
          </li>
          <li className="social-link">
            <Link className="link" href="/">
              <FaDev />
            </Link>
          </li>
        </ul>
      </div>
      &copy; {new Date().getFullYear()}{' '}
      <Link className="copyright" to="/">
        Beetoven D.
      </Link>
    </footer>
  </>
);

export default Footer;

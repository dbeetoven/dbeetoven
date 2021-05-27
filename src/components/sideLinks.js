import React, { Fragment } from 'react';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram';
import { FaDev } from '@react-icons/all-files/fa/FaDev';

export default function SideLinks() {
  return (
    <>
      <div className="contacts-links">
        <ul className="follow-me--links">
          <li className="social-link">
            <a className="link" href="/">
              <FiTwitter />
            </a>
          </li>
          <li className="social-link">
            <a className="link" href="/">
              <FiInstagram />
            </a>
          </li>
          <li className="social-link">
            <a className="link" href="/">
              <FiLinkedin />
            </a>
          </li>
          <li className="social-link">
            <a className="link" href="/">
              <FaDev />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

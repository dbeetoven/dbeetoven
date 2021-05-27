/* eslint-disable react/prop-types */
import React from 'react';
import Footer from './footer';
import Navigation from './navigation';
import SideLinks from './sideLinks';
import SEO from './seo';
import { Link } from 'gatsby';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram';
import { FaDev } from '@react-icons/all-files/fa/FaDev';

export default function Layout({ children }) {
  const siteTitle = 'Beetoven D.';
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <>
      <SEO />
      <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
        <Navigation title={siteTitle} toggleNav={toggleNav} setToggleNav={setToggleNav} />

        <main id="site-main" className="site-main">
          <div id="swup" className="transition-fade">
          <SideLinks />
            <div className="container">{children}</div>
          </div>
        </main>
        <Footer title={siteTitle} />
      </div>
    </>
  );
}

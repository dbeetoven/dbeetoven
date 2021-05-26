/* eslint-disable react/prop-types */
import React from 'react';
import Footer from './footer';
import Navigation from './navigation';
import SEO from './seo';

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
            <div className="container">{children}</div>
          </div>
        </main>

        <Footer title={siteTitle} />
      </div>
    </>
  );
}

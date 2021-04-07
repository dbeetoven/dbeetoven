/* eslint-disable react/prop-types */
import React from 'react';
// import Footer from './footer';
import { Helmet } from 'react-helmet';
// import Social from './social';
import Header from './header';
import Nav from './nav';
import About from './about';
// import Skills from './skills';
import favicon from '../images/favicon.ico';
import useSiteMetadata from '../hooks/use-siteMetadata';

export default function Layout() {
  const { title, description } = useSiteMetadata();
  return (
    <main className="main-container">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <link rel="icon" href={favicon} />
        <meta name="description" content={description} />
      </Helmet>
      <div className="navbar">
        <Nav />
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="about-exp">
        <About />
      </div>
      {/* <div className="skills">
        <Skills />
      </div> */}
    </main>
  );
}

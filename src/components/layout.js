/* eslint-disable react/prop-types */
import React from 'react';
// import Footer from './footer';
import { Helmet } from 'react-helmet';
// import Social from './social';
import Header from './header';
import Nav from './nav';
import useSiteMetadata from '../hooks/use-siteMetadata';

export default function Layout() {
  const { title, description } = useSiteMetadata();
  return (
    <main className="main-container">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="navbar">
        <Nav />
      </div>
      <section className="header">
        <Header />
      </section>

      {/* <div id="page-menu" className="page-menu"><h2>Menu</h2></div>
      <div id="page-main" className="page-main">{children}</div>
      <div id="page-social" className="page-social"><p>Links</p></div>
      <div id="page-footer" className="page-footer"><p><Footer/></p></div> */}
      {/* <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>;  */}
      {/* <Social />
      {/* <Footer /> */}
    </main>
  );
}

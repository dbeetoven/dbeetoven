/* eslint-disable react/prop-types */
import React from 'react';
import Footer from './footer';
import Social from './social';
import Nav from './nav';

export default function Layout({ children }) {
  return (
    <main>
      <header className="page-header">
        <Nav />
      </header>
      <section className="page-content">{children}</section>
      <aside className="page-ads">
        {' '}
        <Social />
      </aside>
      <aside className="page-social">
        {' '}
        <Social />
      </aside>
      <footer className="page-footer">
        <Footer />
      </footer>
    </main>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import Head from '../Head';
import Navbar from '../Navbar';
import { Container } from './LayoutStyles';

export default function Layout({ children }) {
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  return (
    <main>
      <Head />
      <Navbar />
      <Container>{children}</Container>
    </main>
  );
}
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

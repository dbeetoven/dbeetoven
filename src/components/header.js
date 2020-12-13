import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

function HeaderImage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "header/profile.png" }) {
        childImageSharp {
          fixed(width: 200, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img className="img-profile" fixed={data.file.childImageSharp.fixed} alt="Beetoven Profile" />
  );
}

const Header = () => (
  <div className="container grid">
    <div className="header-description">
      <p className="title-hello">Hello, My name is</p>
      <h2 className="title-name">Beetoven Desir</h2>
      <p>
        I am an engineering student, currently working as a software engineer at BAYER based in
        Argentina.
      </p>
      <a href="features.html" className="btn btn-primary">
        Contact-me
      </a>
    </div>
    <div className="header-perfil">
      <h2 className="text-center">
        <HeaderImage />
      </h2>
    </div>
  </div>
);
export default Header;

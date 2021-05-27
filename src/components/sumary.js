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

const Sumary = () => (
  <>
    <div className="row">
      <div className="column">
        <div className="sumary">
          <h2 className="heading">
            <strong>Hi, I'am Beetoven Desir</strong>
            <span className="subtitle">Software Developer</span>
          </h2>
          <div className="description">
            <p className="description-text">
              High level experience in web development and large system architecture, able to
              effectively self-manage and producing quality work.
            </p>
          </div>
          <div className="btn-contact">
            <button className="btn btn-primary">Get in Touch</button>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="sumary-perfil">
          <div></div>
          <div className="perfil">
            <HeaderImage />
          </div>
        </div>
      </div>
    </div>
    {/* <div className="container grid">
        <div className="header-description">
          <p className="title-hello">Hello, My name is</p>
          <h2 className="title-name">Beetoven Desir</h2>
          <p>
            I am an engineering student, currently working as a software engineer multinational
            company, based in Argentina.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/dbeetoven"
            className="btn btn-primary">
            Get in touch
          </a>
        </div>
        <div className="header-perfil">
          <h2 className="text-center">
            <HeaderImage />
          </h2>
        </div>
      </div> */}
  </>
);

export default Sumary;

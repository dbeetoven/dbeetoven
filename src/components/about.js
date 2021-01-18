import React from 'react';

const About = () => (
  <div className="container">
    <h3 className="about-exp-leading text-center my-1">
      Hi, I'm Beetoven a software engineer, I've been working with a few technologies building
      things for the web, mobile devices and API
    </h3>

    <div className="grid grid-3 text-center my-4">
      <div>
        <i className="fas fa-server fa-3x"></i>

        <p className="text-secondary md">WEB</p>
      </div>
      <div>
        <i className="fas fa-upload fa-3x"></i>
        <p className="text-secondary">API</p>
      </div>
      <div>
        <p className="text-secondary">Mobile</p>
      </div>
    </div>
  </div>
);

export default About;

import React, { Fragment } from 'react';

const Skills = () => {
  const skills = [
    'https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg',
    'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
    'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/java/java-original-wordmark.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original-wordmark.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/mysql/mysql-original-wordmark.svg',
    'https://cdn.worldvectorlogo.com/logos/nextjs-3.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/postgresql/postgresql-original-wordmark.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/sass/sass-original.svg',
    'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
    'https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg',
  ];

  return (
    <Fragment>
      <h2 className="md text-center my-2">Supported Languages</h2>
      <div className="container flex">
        {skills.map(n => (
          <div key={`${n}-$div`} className="card">
            <img
              src={n}
              alt="Skills"
              width="40px"
              height="40px"
              key={`${n}-img`}
              className="topview__techs"
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Skills;

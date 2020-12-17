import React, { Fragment } from 'react';

const Skills = () => {
  const skills = [
    {
      title: 'Programming Language',
      url: 'https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg',
    },
    {
      title: 'Programming Language',
      url: 'https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg',
    },
    {
      title: 'Programming Language',
      url: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
    },
    {
      title: 'Programming Language',
      url: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    },
    {
      title: 'Programming Language',
      url: 'https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg',
    },
    {
      title: 'Programming Language',
      url: 'https://devicons.github.io/devicon/devicon.git/icons/java/java-original-wordmark.svg',
    },
    // 'https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg',
    // 'https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original-wordmark.svg',
    // 'https://devicons.github.io/devicon/devicon.git/icons/mysql/mysql-original-wordmark.svg',
    // 'https://cdn.worldvectorlogo.com/logos/nextjs-3.svg',
    // 'https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg',
    // 'https://devicons.github.io/devicon/devicon.git/icons/postgresql/postgresql-original-wordmark.svg',
    // 'https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg',
    {
      title: 'Programming Language',
      url: 'https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg',
    },
    {
      title: 'Programming Language',
      url: 'https://devicons.github.io/devicon/devicon.git/icons/sass/sass-original.svg',
    },
    {
      title: 'Programming Language',
      url:
        'https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg',
    },
  ];

  return (
    <Fragment>
      <h2 className="my-2 text-center md">Supported Languages</h2>
      <div className="container grid">
        <div className="header-perfil">
          <div className="">
            <h2>text design skills</h2>
          </div>
        </div>
        <div className="header-description">
          {skills.map(n => (
            <div key={`${n.title}-$div`} className="progress-bar">
              <div className="progress-bar__title">
                <span>{n.title}</span>
              </div>
              <div className="progress-bar__fill"></div>
            </div>
            // <div key={`${n}-$div`} className="card">
            //   <img
            //     src={n}
            //     alt="Skills"
            //     width="40px"
            //     height="40px"
            //     key={`${n}-img`}
            //     className="topview__techs"
            //   />
            // </div>
          ))}
        </div>
      </div>
      {/* <div className="skills__container skills__grid">
        <div className="card progress-bar__skills"></div>
        <div className="card progress-bar__tumbmail">
          <div className="text-center">
            <h2>text design skills</h2>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Skills;

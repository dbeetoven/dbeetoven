/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link classNameNameName="dis" to={props.to}>
//       {props.children}
//     </Link>
//   </li>
// );
const Nav = () => (
  <div className="header">
    <Link href="#default" className="logo">
      CompanyLogo
    </Link>
    <div className="header-right">
      <Link className="active" href="#home">
        Home
      </Link>
      <Link href="#contact">Contact</Link>
      <Link href="#about">About</Link>
    </div>
  </div>
);

export default Nav;

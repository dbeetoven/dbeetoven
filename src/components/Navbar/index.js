import React from "react";
import Logo from "../icons/logo";
import {
  NavbarContainer,
  NavbarItems,
  NavLink,
  StyledLogo,
} from "./NavbarStyles";

const Navbar = () => (
  <NavbarContainer>
    <StyledLogo to="/">
      <Logo />
    </StyledLogo>
    <NavbarItems>
      <li>
        <NavLink to="#about">About</NavLink>
      </li>
      <li>
        <NavLink to="#tech">Skills</NavLink>
      </li>
    </NavbarItems>
  </NavbarContainer>
);

export default Navbar;

import { FaDev } from "@react-icons/all-files/fa/FaDev";
import { Link } from "gatsby";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle
} from "react-icons/ai";
import Logo from "../icons/logo";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons
} from "./HeaderStyles";




const Header = () => (
  <Container>
    <Div1>
      <Link to="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <Logo /> <span></span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink to="#about">About</NavLink>
      </li>
      <li>
        <NavLink to="#tech">Technologies</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href="https://github.com/dbeetoven"
        target="_blank"
        aria-label="Github"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://linkedin.com/in/dbeetoven/"
        target="_blank"
        aria-label="Linkedin"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://twitter.com/dbeetoven"
        target="_blank"
        aria-label="Twitter"
        rel="noopener noreferrer"
      >
        <AiFillTwitterCircle accentHeight="20" size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://dev.to/dbeetoven"
        target="_blank"
        aria-label="Dev.TO"
        rel="noopener noreferrer"
      >
        <FaDev accentHeight="20" size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

import React from 'react';
import {
  HeaderContainer,
  HeaderContent,
  HeaderDescription,
  HeaderItem01,
  HeaderItem02,
  HeaderTitle,
  SubTitle,
  Title,
  WelcomeHeading,
  ProfileImg,
} from './HeaderStyles';
import Image from '../Images';
import Profile from '../icons/Profile';

const Header = () => (
  <HeaderContainer>
    <HeaderItem01>
      <HeaderTitle>
        <WelcomeHeading>Hello 👋🏼 I'm </WelcomeHeading>
        <Title>Beetoven Desir. </Title>
        <SubTitle>Full Stack Engineer</SubTitle>
      </HeaderTitle>
      <HeaderContent>
        <HeaderDescription>
          I make awesome websites and build cutting-edge engineering solutions
        </HeaderDescription>

        <a
          href="https://linkedin.com/in/dbeetoven/"
          target="_blank"
          aria-label="Linkedin"
          className="email-link"
        >
          Get In Touch
        </a>
      </HeaderContent>
    </HeaderItem01>

    <HeaderItem02>
      <ProfileImg>
        <Profile />
      </ProfileImg>
    </HeaderItem02>
  </HeaderContainer>
);
export default Header;

import React from "react";
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
} from "./HeaderStyles";
import Image from "../Images";
import { Profile } from "../icons/profile";

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
          Experience in large system architecture and multidisciplinary teams,
          and in implementing cutting-edge engineering solutions.
        </HeaderDescription>
      </HeaderContent>
    </HeaderItem01>

    <HeaderItem02>
      <Profile/>
      {/* <Image
        src="profile.png"
        alt="Beetoven Desir Illustration"
        style={{
          border: "10px solid green",
        }}
      /> */}
    </HeaderItem02>
  </HeaderContainer>
);
export default Header;

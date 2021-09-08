import React from 'react';
import { Section, SectionText } from '../../styles/GlobalComponents';

import { LeftSection, WelcomeHeading, SectionTitle } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <WelcomeHeading>Hi,Welcome My name is </WelcomeHeading>
        <SectionTitle center>
          Beetoven Desir. <br />
          <span className="subtitle">Software Developer</span>
        </SectionTitle>

        <SectionText>
          with experience in Software development,currently working at{' '}
          <a href="https://bayer.com/" target="_blank" aria-label="Bayer">
            Bayer
          </a>
          , Based in Argentina. Experience in large system architecture and multidisciplinary teams,
          and in implementing cutting-edge engineering solutions.
        </SectionText>
        <a
          href="https://linkedin.com/in/dbeetoven/"
          target="_blank"
          aria-label="Linkedin"
          className="email-link"
        >
          Get In Touch
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

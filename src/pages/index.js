import * as React from "react";
import { Hero, Technologies, Timeline,BackgroundAnimation } from "../components";
import { Section } from "../styles/GlobalComponents";

const IndexPage = ({ location }) => {
  return (
    <>
      <Section grid>
        <Hero />
        <BackgroundAnimation/>
      </Section>
      <hr/>
      <Timeline />
      <Technologies />
    </>
  );
};

export default IndexPage;

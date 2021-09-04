import * as React from "react";
import {
  Technologies,
  Timeline,
  BackgroundAnimation,
  Header,
} from "../components";
import { Section } from "../styles/GlobalComponents";

const IndexPage = ({ location }) => {
  return (
    <div>
      <section>
        <Header />
      </section>

      <hr />
      <Timeline />
      <Technologies />
    </div>
  );
};

export default IndexPage;
{
  /* <Section grid> */
}

{
  /* <BackgroundAnimation/> */
}
{
  /* </Section> */
}

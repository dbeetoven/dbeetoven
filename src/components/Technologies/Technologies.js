import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { FaConnectdevelop } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node,Java and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaConnectdevelop size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CI/CD</ListTitle>
          <ListParagraph>
            Experience with <br />
            Docker,Jenskins and Aws.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    {/* <SectionDivider colorAlt /> */}
  </Section>
);

export default Technologies;

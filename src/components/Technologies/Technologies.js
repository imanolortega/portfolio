import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { techFront, techBack } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitleH3,
} from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListTitle } from "./TechnologiesStyles";

const compare = (a, b) => {
  if (a.key < b.key) {
    return -1;
  }
  if (a.key > b.key) {
    return 1;
  }
  return 0;
};

techFront.sort(compare);
techBack.sort(compare);

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitleH3 main>Tecnologías</SectionTitleH3>
    <SectionText>Tecnologías que estoy aprendiendo actualmente:</SectionText>
    <List>
      <ListContainer>
        <ListItem>
          <DiReact size="4rem" />
        </ListItem>
        <ListTitle>Frontend</ListTitle>
        {techFront.map(({ key, tech }) => (
          <ListItem key={key} style={{ fontSize: "2rem" }}>
            - {tech}
          </ListItem>
        ))}
      </ListContainer>
      <ListContainer>
        <ListItem>
          <DiFirebase size="4rem" />
        </ListItem>
        <ListTitle>Backend</ListTitle>
        {techBack.map(({ key, tech }) => (
          <ListItem key={key} style={{ fontSize: "2rem" }}>
            - {tech}
          </ListItem>
        ))}
      </ListContainer>
    </List>
  </Section>
);

export default Technologies;

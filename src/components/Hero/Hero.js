import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Frontend Dev
      </SectionTitle>
      <SectionText>Bienvenido a mi portfolio personal</SectionText>

      <a href="#projects">
        <Button>Ver Proyectos</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;

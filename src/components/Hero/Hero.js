import React from "react";

import { SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, SectionHero, SectionTextHero } from "./HeroStyles";

const Hero = () => (
  <>
    <SectionHero row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Frontend Developer
        </SectionTitle>
        <SectionTextHero>Bienvenido a mi portfolio personal</SectionTextHero>

        <a href="#projects">
          <Button>Ver Proyectos</Button>
        </a>
      </LeftSection>
    </SectionHero>
  </>
);

export default Hero;

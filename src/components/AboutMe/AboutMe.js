import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
} from "../../styles/GlobalComponents";

import { SectionTitleH3 } from "../../styles/GlobalComponents/index";

const AboutMe = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitleH3 main>Sobre mí</SectionTitleH3>
      <SectionText>
        Tengo 29 años. Estudio Frontend desde principios de 2020. <br />
        Soy (fui) diseñador gráfico y comunicador. Comencé a programar con
        Python hace unos años y desde el año pasado opté por el Front y
        Javascript. <br />
        Busco comenzar mi carrera como programador para dedicarme full time a
        esto y seguir aprendiendo.{" "}
      </SectionText>
    </Section>
  );
};

export default AboutMe;

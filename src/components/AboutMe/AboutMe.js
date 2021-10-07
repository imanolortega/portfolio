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
      <SectionDivider divider />
      <SectionTitleH3 main>Sobre mí</SectionTitleH3>
      <SectionText>
        Tengo 30 años. Estudio Frontend desde principios de 2020. <br />
        Antes fui diseñador gráfico y estudiante de Comunicación Social. Trabajo
        con Javascript y React JS. <br />
        Actualmente trabajo en{" "}
        <a
          href="https://easytechgreen.com/"
          style={{ color: "white" }}>
          Easytechgreen
        </a>
        .{" "}
      </SectionText>
    </Section>
  );
};

export default AboutMe;

import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxContact, BoxText } from "./ContactStyles";
import { SectionTitleH3 } from "./../../styles/GlobalComponents/index";

const data = [
  {
    contact: "Email",
    text: "imanolrtega@gmail.com",
    link: "mailto:imanolrtega@gmail.com",
  },
  { contact: "Teléfono", text: "3855230205", link: "tel:3855230205" },
  {
    contact: "LinkedIn",
    text: "Ver Perfil",
    link: "https://www.linkedin.com/in/imanol-rtega/",
  },
  {
    contact: "GitHub",
    text: "Ver GitHub",
    link: "https://github.com/imanolrtega",
  },
];

const Contact = () => (
  <Section id="contact">
    <SectionDivider divider />
    <SectionTitleH3 main>Contacto</SectionTitleH3>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxContact>{card.contact}</BoxContact>
          <BoxText href={card.link}>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Contact;

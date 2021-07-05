import React from "react";
import { bool } from "prop-types";
import { StyledMenu, Social } from "./MenuStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="#projects">Proyectos</a>
      <a href="#tech">Tecnologías</a>
      <a href="#about">Sobre mí</a>
      <a href="#contact">Contacto</a>
      <Social>
        <SocialIcons href="https://github.com/imanolrtega">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/imanol-rtega/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Social>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;

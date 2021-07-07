import Link from "next/link";
import React, { useState, useRef } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCode } from "react-icons/di";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { useOnClickOutSide } from "../../hooks/hooks";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutSide(node, () => setOpen(false));

  return (
    <Container>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCode size="5rem" />
            <span style={{ fontSize: "2.1rem", fontWeight: "600" }}>
              Imanol Ortega
            </span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <Link href="#projects">
          <NavLink>Proyectos</NavLink>
        </Link>
        <Link href="#tech">
          <NavLink>Tecnologías</NavLink>
        </Link>
        <Link href="#about">
          <NavLink>Sobre mí</NavLink>
        </Link>
        <Link href="#contact">
          <NavLink>Contacto</NavLink>
        </Link>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/imanolrtega">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/imanol-rtega/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;

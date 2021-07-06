import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Sitio Web codeado con{" "}
            <a style={{ color: "white" }} href="https://nextjs.org/">
              Next JS
            </a>{" "}
            y hosteado en{" "}
            <a style={{ color: "white" }} href="https://vercel.com/">
              Vercel
            </a>
            . Aquí puedes ver el{" "}
            <a
              style={{ color: "white" }}
              href="https://github.com/imanolrtega/portfolio">
              Código
            </a>
            .
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/imanolrtega">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/imanol-rtega/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

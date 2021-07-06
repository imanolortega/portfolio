import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    letter-spacing: 0.05em;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  .gKhHrq {
    padding: 0px !important;
  }

  .scrollTop {
    position: fixed;
    height: 2.9em !important;
    width: 2.9em;
    right: 0.9em;
    bottom: 20px;
    height: 20px;
    z-index: 1000;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.5;
  }
  
  .scrollTop:hover {
    opacity: 1;
    }
    
  @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.5;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    .btn{
      padding-left: 10px !important;
    }
  }

`;

export default GlobalStyles;

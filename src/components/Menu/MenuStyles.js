import styled from "styled-components";

export const StyledMenu = styled.nav`
  z-index: 21;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fafafa;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 75%;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0f1624;
    text-decoration: none;
    transition: color 0.3s linear;

    @media ${(props) => props.theme.breakpoints.md} {
      font-size: 2rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export const Social = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

import React from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";

function LoginPage() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <>
      <LoginPageStyled>
        <Logo className={"logo-login-page"} />
        <LoginForm />
      </LoginPageStyled>
    </>
  );
}

// Ajout du style via Styled Components
// Styling for the page background
const LoginPageStyled = styled.div`
  // This is to put a background image full size
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    background: url("/images/LoginPageBG.jpg") rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .logo-login-page {
    /* object-fit: contain;
    object-position: center; */
    /* width: 240px; */
    /* margin: 0 ${theme.gridUnit / 2}; */

    h1 {
      display: inline;
      text-align: center;
      color: ${theme.colors.primary};
      font-size: 110px;
      line-height: 1em;
      font-weight: ${theme.fonts.weights.bold};
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-family: "Amatic SC", cursive;
    }

    img {
      object-fit: contain;
      object-position: center;
      height: 200px;
      width: 260px;
      margin: 0 ${theme.gridUnit / 2};
    }
  }
`;

export default LoginPage;

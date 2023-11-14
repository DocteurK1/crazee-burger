import React from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/logo";

function LoginPage() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <>
      <LoginPageStyled>
        <Logo />
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
    background: url("/images/LoginPageBG.jpg") rgba(0, 0, 0, 0.75);
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
`;

export default LoginPage;

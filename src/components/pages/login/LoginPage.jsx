import React from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import img from "C:/Users/fred_/Desktop/Crazee Burger/crazee-burger/src/components/pages/login/LoginPageBG.jpg";

function LoginPage() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <>
      <LoginPageStyled>
        <LoginForm />
      </LoginPageStyled>
    </>
  );
}

// Ajout du style via Styled Components

const LoginPageStyled = styled.div`
  opacity: 0.95;
  background: #000;
  mix-blend-mode: darken;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  //background-color: red;
  height: 982px;
  /* width: 100%; */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-image: url(${img});
`;

export default LoginPage;

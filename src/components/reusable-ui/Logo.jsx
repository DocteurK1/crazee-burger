import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img
        src="/images/logo-orange.png"
        alt="Logo Crazee Burger"
      ></img>
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  /* background: blue; */
  /* border: 1px solid blue; */
  /* color: white; */
  display: flex;
  align-items: center;
  /* transform: scale(2.5); */
  overflow: hidden;
  /* background-size: cover; */

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
`;

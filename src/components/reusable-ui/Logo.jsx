import React from "react";
import img from "../../assets/logo/logo-orange.png";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return <LogoStyled>Logo Crazy Burger</LogoStyled>;
}

const LogoStyled = styled.div`
  background: blue;
`;

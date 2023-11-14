import React from "react";
import img from "../../assets/logo/logo-orange.png";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <LogoStyled>
      <TextStyled>CRAZEE</TextStyled>
      <img
        src={img}
        alt="CRAZEE BURGER LOGO"
        height="250px"
      />
      <TextStyled>BURGER</TextStyled>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 100px;
`;

const TextStyled = styled.p`
  font-size: 110px;
  margin-right: 10px;
  color: ${theme.colors.primary};
`;

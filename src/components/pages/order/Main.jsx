import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return <StyledMain></StyledMain>;
}

const StyledMain = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  margin: auto;
  padding: auto;

  width: 1400px;
  height: 834px;

  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;

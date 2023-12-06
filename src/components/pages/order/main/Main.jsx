import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";

export default function Main() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <>
      <StyledMain>
        <Basket />
        <Menu />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.div`
  border: 5px solid purple;

  display: flex;
  flex-direction: row;
  background: ${theme.colors.background_white};
  /* flex: 1; */
  margin: auto;
  /* padding: auto; */
  /* flex-direction: column; */

  width: 1400px;
  height: 834px;

  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;

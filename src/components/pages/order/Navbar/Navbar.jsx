import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Navbar() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return
  return (
    <>
      <NavBarStyled>
        <LeftSide />
        <RightSide />
      </NavBarStyled>
    </>
  );
}

const NavBarStyled = styled.nav`
  background: ${theme.colors.white};
  display: flex;
  width: 1360px;
  height: 10vh;
  margin: auto;
  margin-top: 24px;
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-top-left-radius: ${theme.borderRadius.extraRound};

  justify-content: space-between;
  padding: 0 20px;

  position: sticky;
  top: 0;
  z-index: 1000;
`;

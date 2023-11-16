import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styled from "styled-components";

export default function Navbar() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return
  return (
    <>
      <StyledNavbar>
        <LeftSide />
        <RightSide />
      </StyledNavbar>
    </>
  );
}

const StyledNavbar = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  /* transform: scale(2.5); */
  overflow: hidden;
  width: 1400px;
  height: 100px;
  margin: auto;
  margin-top: 24px;
  border-radius: 15px 15px 0px 0px;
`;

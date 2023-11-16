import React from "react";
import styled from "styled-components";

export default function Main() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return <StyledMain></StyledMain>;
}

const StyledMain = styled.div`
  /* background-color: white; */
  /* display: flex; */
  /* align-items: center; */
  margin: auto;
  padding: auto;

  width: 1400px;
  height: 834px;

  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
`;

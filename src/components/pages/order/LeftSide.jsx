import React from "react";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { refreshPage } from "../../../utils/window";

export default function LeftSide() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <>
      <StyledLeftSide>
        <Logo
          className={"logo-order-page"}
          onClick={refreshPage}
        />
      </StyledLeftSide>
    </>
  );
}

const StyledLeftSide = styled.div`
  /* background-color: green; */
  width: 240px;
  height: 98px;
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  .logo-order-page {
    cursor: pointer;
  }
`;

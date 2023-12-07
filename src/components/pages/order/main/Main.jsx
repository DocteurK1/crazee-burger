import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";
import Admin from "./Admin/Admin";

export default function Main() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <StyledMain>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <Admin />
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  margin: auto;

  width: 1400px;
  height: calc(95vh - 10vh);

  border: 2px solid green;

  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};

  display: grid;
  /* grid-template-columns: 25% 1fr; // A réactiver quand on se servira du basket */
  grid-template-columns: 1fr;

  .basket {
    /* background: pink; */
    border: 2px solid pink;
  }

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;

import React, { useContext } from "react";
import styled from "styled-components/macro";
import { theme } from "../../../../theme";
import Basket from "./Admin/AdminPanel/Basket/Basket";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import OrderContext from "../../../../context/OrderContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { adminAnimation } from "../../../../theme/animations";

export default function Main() {
  // D’abord on définit les states de base (état, données, variable…)

  const { isModeAdmin } = useContext(OrderContext);

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <StyledMain>
      <div className="basket">
        <Basket />
      </div>
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && (
          <TransitionGroup className="transition-group">
            <CSSTransition
              appear={true}
              classNames="admin"
              timeout={500}
            >
              <Admin />
            </CSSTransition>
          </TransitionGroup>
        )}
        {/* Similaire à : {isModeAdmin ? <Admin /> : null}  */}
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
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};

  display: grid;
  grid-template-columns: 25% 1fr; // A réactiver quand on se servira du basket
  //grid-template-columns: 1fr; // A desactiver quand on se servira du basket

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }

  /* .admin-appear {
    opacity: 0.1;
    transform: translateY(100%);
    &.admin-appear-active {
      opacity: 1;
      transform: translateY(0);
      transition: all 500ms;
    }
  } */

  ${adminAnimation}
`;

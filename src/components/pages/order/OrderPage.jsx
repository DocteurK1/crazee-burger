import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./main/Main.jsx";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import OrderContext from "../../../context/OrderContext.js";

export default function OrderPage() {
  // D’abord on définit les states de base (état, données, variable…)
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  // // Comportements, les actions, la logique

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
  };

  // L’affichage, le render, via return

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <Navbar />
        <Main />
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  /* border: 3px solid green; */

  /* background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

import React from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./main/Main.jsx";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";

export default function OrderPage() {
  // D’abord on définit les states de base (état, données, variable…)

  // // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <OrderPageStyled>
      <Navbar />
      <Main />
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  border: 3px solid green;

  /* background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

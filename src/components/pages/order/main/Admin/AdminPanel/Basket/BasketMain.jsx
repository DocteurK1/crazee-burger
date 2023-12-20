import React from "react";
import styled from "styled-components";
import BasketEmpty from "./BasketEmpty";
import { theme } from "../../../../../../../theme";

export default function BasketMain() {
  return (
    <BasketMainStyled>
      <BasketEmpty />
    </BasketMainStyled>
  );
}

const BasketMainStyled = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  border-radius: 0px 0px 0px 15px;
  background: #f5f5f7;
  box-shadow: ${theme.shadows.basket};
`;

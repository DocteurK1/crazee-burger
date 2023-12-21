import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function BasketEmpty() {
  return <BasketEmptyStyled>Votre commande est vide.</BasketEmptyStyled>;
}

const BasketEmptyStyled = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  /* margin-top: 310px; */
  color: ${theme.colors.greyBlue};
  text-align: center;
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.regular};
  line-height: 72px; /* 200% */
`;

import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function BasketFooter() {
  return <BasketFooterStyled>Codé avec ❤️ et React.JS</BasketFooterStyled>;
}

const BasketFooterStyled = styled.div`
  /* border: 1px solid blue; */
  height: 70px;
  background: ${theme.colors.background_dark};

  border-radius: 0px 0px 0px 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.white};
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P2};
  /* font-style: normal; */
  font-weight: ${theme.fonts.weights.bold};
  /* line-height: normal; */
`;

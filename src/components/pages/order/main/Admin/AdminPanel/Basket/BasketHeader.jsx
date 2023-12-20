import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function BasketHeader() {
  return <BasketHeaderStyled>BasketHeader</BasketHeaderStyled>;
}

const BasketHeaderStyled = styled.div`
  /* border: 1px solid green; */
  height: 70px;
  background: ${theme.colors.background_dark};
  color: ${theme.colors.primary};
  padding: 0px 16px;
`;

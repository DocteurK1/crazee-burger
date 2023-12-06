import React from "react";
import styled from "styled-components";

export default function Basket() {
  return <BasketStyled>Basket</BasketStyled>;
}

const BasketStyled = styled.div`
  /* background: red; */
  height: 100%;
  /* border: 3px solid red; */
  width: 350px; // When open should be 350px
  /* background: red; */
`;

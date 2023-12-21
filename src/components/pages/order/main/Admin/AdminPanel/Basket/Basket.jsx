import React from "react";
import styled from "styled-components";
import BasketHeader from "./BasketHeader";
import BasketMain from "./BasketMain";
import BasketFooter from "./BasketFooter";

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketMain />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  /* background: red; */
  /* border: 1px solid red; */
  width: 350px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  /* background: grey; */
`;

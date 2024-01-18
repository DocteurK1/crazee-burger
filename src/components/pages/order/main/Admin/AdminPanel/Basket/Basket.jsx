import React, { useContext } from "react";
import styled from "styled-components/macro";
import BasketHeader from "./BasketHeader";
import BasketMain from "./BasketMain";
import BasketFooter from "./BasketFooter";
import OrderContext from "../../../../../../../context/OrderContext";
import {
  calculateSumToPay,
  formatPrice,
} from "../../../../../../../utils/maths";

export default function Basket() {
  const { basketMenu, menu } = useContext(OrderContext);

  const sumToPay = calculateSumToPay(basketMenu, menu);

  return (
    <BasketStyled>
      <BasketHeader amountToPay={formatPrice(sumToPay)} />
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

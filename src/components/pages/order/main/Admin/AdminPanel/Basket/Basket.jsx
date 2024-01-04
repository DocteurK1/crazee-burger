import React, { useContext } from "react";
import styled from "styled-components";
import BasketHeader from "./BasketHeader";
import BasketMain from "./BasketMain";
import BasketFooter from "./BasketFooter";
import OrderContext from "../../../../../../../context/OrderContext";
import { formatPrice } from "../../../../../../../utils/maths";
import { findObjectById } from "../../../../../../../utils/array";

export default function Basket() {
  const { basketMenu, menu } = useContext(OrderContext);

  const sumToPay = basketMenu.reduce((total, basketProduct) => {
    // if (isNaN(basketProduct.price)) return total;
    const menuProduct = findObjectById(basketProduct.id, menu);
    total += menuProduct.price * basketProduct.quantity;
    console.log("basketProduct.price", basketProduct);
    // console.log("basketProduct.quantity", basketProduct.quantity);
    return total;
  }, 0);

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

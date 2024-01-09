import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import {
  calculateSumToPay,
  formatPrice,
} from "../../../../../../../utils/maths";
import OrderContext from "../../../../../../../context/OrderContext";

export default function BasketHeader({ amountToPay }) {
  const { basketMenu, menu } = useContext(OrderContext);

  // if (!basketMenu) return <span>Test</span>;

  const sumToPay = calculateSumToPay(basketMenu, menu);

  return (
    <BasketHeaderStyled>
      <div>Total</div>
      <div>{!sumToPay ? "0,00€" : formatPrice(sumToPay)}</div>
    </BasketHeaderStyled>
  );
}

const BasketHeaderStyled = styled.div`
  /* border: 1px solid green; */
  height: 70px;
  background: ${theme.colors.background_dark};

  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${theme.colors.primary};
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.regular};
  letter-spacing: 2px;
`;

import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import OrderContext from "../../../../../../../context/OrderContext";

export default function BasketHeader() {
  const { total, setTotal } = useContext(OrderContext);

  return (
    <BasketHeaderStyled>
      <div>Total</div>
      <div>{!total ? "0,00€" : total}</div>
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

import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function BasketCard() {
  return (
    <BasketCardStyled>
      <div className="img">Image</div>
      <div className="productInfo">
        <div className="name">Product Name</div>
        <div className="price">Price</div>
      </div>
      <div className="quantity">Quantity</div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  display: flex;
  justify-content: space-between;

  width: 318px;
  height: 86px;
  margin: 8px 16px;
  box-sizing: border-box;
  border-radius: 5px;
  background: ${theme.colors.white};
  box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.2);

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
    width: 85px;
    height: 100%;
  }

  .productInfo {
    /* display: flex; */
    align-items: center;
    justify-content: center;
    width: 120px;

    .name {
      border: 1px solid red;
      display: flex;
      height: 50%;

      justify-content: center;
      align-items: center;
    }
    .price {
      border: 1px solid green;
      display: flex;
      height: 50%;

      justify-content: center;
      align-items: center;
    }
  }

  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid orange;
    width: 76px;
    height: 100%;
  }
`;

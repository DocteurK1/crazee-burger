import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function BasketCard({ id, title, imgUrl, price }) {
  return (
    <BasketCardStyled>
      <img className="img" src={imgUrl} alt={title} />
      <div className="productInfo">
        <div className="name">{title}</div>
        <div className="price">{price}</div>
      </div>
      <div className="quantity">x 13</div>
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
  position: relative;
  padding: 8px 16px;

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 70px;
    object-fit: contain;
    object-position: center;
  }

  .productInfo {
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 120px;
    align-items: flex-start;
    padding-left: 15px;

    .name {
      display: flex;
      height: 50%;
      /* display: inline; */
      padding-top: 5px;

      color: #17161a;
      font-family: Amatic SC;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
    }
    .price {
      display: flex;
      height: 50%;

      color: #ffa01b;
      font-family: Open Sans;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #ffa01b;
    font-family: Open Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    width: 76px;
    height: 100%;
  }
`;

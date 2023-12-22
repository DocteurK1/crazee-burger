import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function BasketCard({ id, title, imgUrl, price, quantity }) {
  return (
    <BasketCardStyled>
      <img className="img" src={imgUrl} alt={title} />
      <div className="productInfo">
        <div className="name">{title}</div>
        <div className="price">{price}</div>
      </div>
      <button className="quantity">x {quantity}</button>
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
  padding-left: 16px;
  padding-bottom: 8px;

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 70px;
    object-fit: contain;
    object-position: center;
    padding-top: 8px;
  }

  .productInfo {
    padding-top: 8px;
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
    /* background: blue; */
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
    height: 86px;
    cursor: pointer;
    border: none;
    background: white;
  }

  .quantity:hover {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 24 25" fill="none"><path d="M6 19.75C6 20.85 6.9 21.75 8 21.75H16C17.1 21.75 18 20.85 18 19.75V7.75H6V19.75ZM8.46 12.63L9.87 11.22L12 13.34L14.12 11.22L15.53 12.63L13.41 14.75L15.53 16.87L14.12 18.28L12 16.16L9.88 18.28L8.47 16.87L10.59 14.75L8.46 12.63ZM15.5 4.75L14.5 3.75H9.5L8.5 4.75H5V6.75H19V4.75H15.5Z" fill="white"/></svg>');
    border-radius: 0px 5px 5px 0px;
    background: #e25549;
  }
`;

import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Card() {
  return (
    <CardStyled>
      <img
        className="img"
        src="/images/burger1.png"
        alt=""
      />
      <p className="CardTitle">Title card</p>
      <div className="info-text">
        <p className="CardDescription">5,60€</p>
        <CardButtonStyled>
          <span>Ajouter</span>
        </CardButtonStyled>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  /* background: blue; */
  display: flex;
  width: 240px;
  height: 330px;
  flex-direction: column;
  margin: 50px 20px 10px 20px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  .info-text {
    display: flex;
    /* background: yellow; */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .img {
    /* display: flex; */
    justify-content: center;
    align-items: center;
    height: 145px;
    width: 200px;
    /* background: purple; */
    margin: 50px 20px 15px 20px; //Top Right Bottom Left
    object-fit: contain;
    object-position: center;
  }

  .CardTitle {
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 00px 25px 5px 30px;
    display: inline;

    text-align: left;
    color: #17161a;
    font-size: 36px;
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  .CardDescription {
    /* display: flex;
    justify-content: left;
    align-items: center; */
    padding-top: 10px;
    margin-left: 30px;
    /* display: inline; */

    text-align: left;
    color: ${theme.colors.primary};
    font-size: 16px;
    line-height: 1em;
    font-weight: 400;
    letter-spacing: 1.5px;
  }
`;

const CardButtonStyled = styled.button`
  width: 95px;
  height: 38px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  margin: 00px 25px 0px 0px;

  border-radius: ${theme.borderRadius.round};
  font-size: 11px;
  font-weight: 700;
  color: ${theme.colors.white};
  background-color: orange;
  border: 1px solid orange;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

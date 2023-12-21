import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../theme";
import { TiDelete } from "react-icons/ti";
import OrderContext from "../../../../context/OrderContext";
// import { isStr } from "react-toastify/dist/utils";

export default function Card({
  id,
  imgUrl,
  title,
  price,
  onDelete,
  onCardSelect,
  isHoverable,
  isSelected,
}) {
  // D’abord on définit les states de base (état, données, variable…)
  const { isModeAdmin } = useContext(OrderContext);
  const isAdmin = isModeAdmin;

  // Comportements, les actions, la logique

  const handleCardClick = (event) => {
    // console.log("click: ", event.target.value);
    onCardSelect(id);
  };

  // L’affichage, le render, via return

  return (
    <CardStyled
      onClick={handleCardClick}
      isHoverable={isHoverable}
      isSelected={isSelected}
    >
      <div className="card">
        {isAdmin && (
          <div className="delete-div">
            <TiDelete className="delete-button" onClick={onDelete} />
          </div>
        )}
        <img className="img" src={imgUrl} alt={title} />
        <p className="CardTitle">{title}</p>
        <div className="info-text">
          <p className="CardDescription">{price}</p>
          <CardButtonStyled className="primary-button">
            <span>Ajouter</span>
          </CardButtonStyled>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  ${(props) => props.isHoverable && hoverableStyle}

  /* border: 2px solid red; */

  display: flex;
  width: 240px;
  height: 330px;
  flex-direction: column;
  margin: 50px 20px 10px 20px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  position: relative;

  .card {
    border-radius: ${theme.borderRadius.extraRound};
    height: 330px;
  }

  .delete-div {
    position: absolute;
    right: 0;
  }

  .delete-button {
    padding-top: 10px;
    padding-right: 10px;
    height: 30px;
    width: 30px;
    color: #ffa01b;
    cursor: pointer;

    :hover {
      color: red;
    }

    /* border: 1px solid orange; */
  }

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
    padding-top: 10px;
    margin-left: 30px;

    text-align: left;
    color: ${theme.colors.primary};
    font-size: 16px;
    line-height: 1em;
    font-weight: 400;
    letter-spacing: 1.5px;
  }
  ${({ isHoverable, isSelected }) => isHoverable && isSelected && selectedStyle}
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
  cursor: pointer;

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

const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: ease-out0.4s;
    box-shadow: -8px 8px 20px 0px rgba(255, 160, 27, 0.7);
    cursor: pointer;
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};
  .primary-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }

  .delete-button {
    color: ${theme.colors.white};

    :active {
      color: ${theme.colors.white};
    }
  }

  .CardDescription {
    color: ${theme.colors.white};
  }
`;

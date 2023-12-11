import React, { useContext, useState } from "react";
import styled from "styled-components";
import Card from "./Card.jsx";
import { formatPrice } from "../../../../utils/maths.js";
import { truncateString } from "../../../../utils/truncateString.js";
import OrderContext from "../../../../context/OrderContext.js";
import { fakeMenu } from "../../../../fakeData/fakeMenu.js";
import PrimaryButton from "../../../reusable-ui/PrimaryButton.jsx";

export default function Menu() {
  // D’abord on définit les states de base (état, données, variable…)
  const { menu, setMenu } = useContext(OrderContext);
  const [defaultMenu] = useState(fakeMenu.LARGE);

  // Comportements, les actions, la logique

  const handleDelete = (cardId) => {
    // Filter out the card with the given ID and update the state
    const updatedMenu = menu.filter((card) => card.id !== cardId);
    setMenu(updatedMenu);
    console.log("Menu Length : ", menu.length);
  };

  const resetMenu = () => {
    console.log("reset menu");
    setMenu(defaultMenu);
  };

  // Affichage

  return (
    <MenuStyled>
      {/* <AddForm onAddCard={handleAddCard} /> */}
      {menu.length === 0 && (
        <div className="empty-menu">
          <div className="title">Le menu est vide ?</div>
          <div className="sub-title">
            Cliquez ci-dessous pour le réinitialiser
          </div>
          <button className="reset-button" onClick={resetMenu}>
            Générer de nouveaux produits
          </button>
        </div>
      )}
      {menu.map((produit) => (
        <Card
          id={produit.id}
          imgUrl={produit.imageSource}
          title={truncateString(produit.title, 11)}
          price={formatPrice(produit.price)}
          onDelete={handleDelete}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  border: 2px solid blue;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 10px;
  max-width: 100%;
  margin: 0 auto;
  overflow-y: scroll;

  /* justify-content: space-evenly; */
  justify-items: center;
  /* align-content: space-evenly; */
  /* align-items: center; */

  .empty-menu {
    border: 2px solid orange;
    width: 100%;
    grid-column: 1 / -1;
    height: 100vh;
    grid-template-columns: 1fr;
    /* display: inline-flex; */
    align-items: center;
    justify-content: center;

    .title {
      padding-top: 300px;
      color: #747b91;
      text-align: center;
      font-family: Amatic SC;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      /* justify-items: center; */
    }
    .sub-title {
      padding-top: 21px;
      padding-bottom: 21px;
      color: #747b91;
      text-align: center;
      font-family: Amatic SC;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      /* justify-items: center; */
    }
    .reset-button {
      display: block;
      border-radius: 5px;
      border: 1px solid #ff9f1b;
      background: #ff9f1b;
      /* display: inline-flex; */
      padding: 19px 24.047px 19px 25px;
      /* align-items: flex-start; */
      color: #fff;
      text-align: center;
      font-family: Arial;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 12px; /* 100% */
      cursor: pointer;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
  }
`;

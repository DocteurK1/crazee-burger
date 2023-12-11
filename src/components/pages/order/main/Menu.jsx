import React, { useContext, useState } from "react";
import styled from "styled-components";
import Card from "./Card.jsx";
import { fakeMenu } from "../../../../fakeData/fakeMenu.js";
import { formatPrice } from "../../../../utils/maths.js";
import { truncateString } from "../../../../utils/truncateString.js";
import AddForm from "./Admin/AdminPanel/AddForm.jsx";
import { MdTableRestaurant } from "react-icons/md";
import OrderContext from "../../../../context/OrderContext.js";

export default function Menu() {
  // D’abord on définit les states de base (état, données, variable…)
  const { menu, setMenu } = useContext(OrderContext);

  // Comportements, les actions, la logique

  const handleDelete = (cardId) => {
    // Filter out the card with the given ID and update the state
    const updatedMenu = menu.filter((card) => card.id !== cardId);
    setMenu(updatedMenu);
  };

  // Affichage

  return (
    <MenuStyled>
      {/* <AddForm onAddCard={handleAddCard} /> */}
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
`;

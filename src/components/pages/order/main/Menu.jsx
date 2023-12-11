import React, { useContext, useState } from "react";
import styled from "styled-components";
import Card from "./Card.jsx";
import { formatPrice } from "../../../../utils/maths.js";
import { truncateString } from "../../../../utils/truncateString.js";
import OrderContext from "../../../../context/OrderContext.js";
import { fakeMenu } from "../../../../fakeData/fakeMenu.js";
import EmptyMenu from "./EmptyMenu.jsx";

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
      {menu.length === 0 && <EmptyMenu resetMenu={resetMenu} />}

      {menu.map((produit) => (
        <Card
          key={produit.id}
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

import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card.jsx";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.js";
import { formatPrice } from "../../../../utils/maths.js";
import { truncateString } from "../../../../utils/truncateString.js";
import AdminContainer from "../admin/AdminContainer.jsx";

export default function Menu() {
  // D’abord on définit les states de base (état, données, variable…)

  const [menu, setMenu] = useState(fakeMenu2);

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <>
      {/* <AdminContainer /> */}
      <MenuStyled>
        {menu.map((produit) => (
          <Card
            key={produit.id}
            imgUrl={produit.imageSource}
            title={truncateString(produit.title, 11)}
            price={formatPrice(produit.price)}
          />
        ))}
      </MenuStyled>
    </>
  );
}

const MenuStyled = styled.div`
  border: 3px solid yellow;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 10px;
  max-width: 100%;
  margin: 0 auto;
  overflow-y: auto;

  /* justify-content: space-evenly; */
  justify-items: center;
  /* align-content: space-evenly; */
  /* align-items: center; */
`;

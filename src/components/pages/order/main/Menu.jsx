import React from "react";
import styled from "styled-components";
import Card from "./Card.jsx";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formatPrice } from "../../../../utils/maths.js";
import { truncateString } from "../../../../utils/truncateString.js";

export default function Menu() {
  // D’abord on définit les states de base (état, données, variable…)
  const menu2Length = fakeMenu2.length;

  // Comportements, les actions, la logique

  const renderCards = (menu, length) => {
    return menu.map((item) => (
      <Card
        key={item.id}
        imgUrl={item.imageSource}
        title={truncateString(item.title, 11)}
        price={formatPrice(item.price)}
      />
    ));
  };
  // L’affichage, le render, via return

  return <MenuStyled>{renderCards(fakeMenu2, menu2Length)}</MenuStyled>;
}

const MenuStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 10px;

  /* background: red; */

  height: 834px; /* Set a fixed height for the container */
  overflow-y: auto; /* Add vertical scrolling when content exceeds the height */

  /* z-index: 1; */
`;

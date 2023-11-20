import React from "react";
import styled from "styled-components";
import Card from "./Card.jsx";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  // D’abord on définit les states de base (état, données, variable…)
  // const menu1Length = fakeMenu1.length;
  const menu2Length = fakeMenu2.length;

  // Comportements, les actions, la logique

  const renderCards = (menu, length) => {
    return menu.map((item) => (
      <Card
        key={item.id}
        imgUrl={item.imageSource}
        title={item.title}
        price={item.price}
      />
    ));
  };
  // L’affichage, le render, via return

  return (
    <MenuStyled>
      {/* {renderCards(fakeMenu1, menu1Length)} */}
      {renderCards(fakeMenu2, menu2Length)}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 10px;
`;

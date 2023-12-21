import React, { useState } from "react";
import styled from "styled-components";
import BasketEmpty from "./BasketEmpty";
import { theme } from "../../../../../../../theme";
import BasketCard from "./BasketCard";
import { fakeBasket } from "../../../../../../../fakeData/fakeBasket";
import { formatPrice } from "../../../../../../../utils/maths";
import { truncateString } from "../../../../../../../utils/truncateString";

export default function BasketMain() {
  // State
  const [basketMenu, setBasketMenu] = useState(fakeBasket.LARGE);

  // Behavior
  const importBasketMenu = (basketMenu) => {
    console.log("basketMenu", basketMenu);
    // console.log("basketMenu title: ", basketMenu.title);

    basketMenu.map(({ id, title, imageSource, price }) => {
      // console.log("id", id);
      // Additional logging or processing can be done here
      return null; // Remember to return something if your map function has a return value
    });
  };

  // Call importBasketMenu when the component renders (you might want to call it in an event handler or useEffect depending on your use case)
  importBasketMenu(basketMenu);

  // Display
  return (
    <BasketMainStyled>
      {basketMenu.map(({ id, title, imageSource, price }) => (
        <BasketCard
          key={id}
          id={id}
          imgUrl={imageSource}
          title={truncateString(title, 11)}
          price={formatPrice(price)}
          // onDelete={(event) => handleCardDelete(event, id)}
          // onCardSelect={onCardSelect}
          // isHoverable={isModeAdmin}
          // isSelected={checkIfProductisClicked(id, productToEdit.id)}
          // onCardDelete={{} => handleCardDelete(id)}
        />
      ))}
      {/* <BasketCard /> */}
      <BasketEmpty />
    </BasketMainStyled>
  );
}

const BasketMainStyled = styled.div`
  height: 100%;
  border-radius: 0px 0px 0px 15px;
  background: #f5f5f7;
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow: hidden; */
`;

import React, { useContext } from "react";
import styled from "styled-components";
import BasketEmpty from "./BasketEmpty";
import { theme } from "../../../../../../../theme";
import BasketCard from "./BasketCard";
import { formatPrice } from "../../../../../../../utils/maths";
import { truncateString } from "../../../../../../../utils/truncateString";
import OrderContext from "../../../../../../../context/OrderContext";
import { filter } from "../../../../../../../utils/array";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function BasketMain() {
  // State

  const { basketMenu, setBasketMenu } = useContext(OrderContext);

  const handleDelete = (cardId) => {
    // Filter out the card with the given ID and update the state
    // const updatedMenu = filter(cardId, basketMenu);
    const updatedMenu = basketMenu.filter((card) => card.id !== cardId);
    console.log("basket menu: ", basketMenu[0].price);

    setBasketMenu(updatedMenu);
  };

  const handleCardDelete = (event, idProductToDelete) => {
    // console.log("event", event.target.id);
    event.stopPropagation();
    handleDelete(idProductToDelete);
  };

  // Comportements

  // Affichage
  return (
    <BasketMainStyled>
      {basketMenu.length === 0 && <BasketEmpty />}

      {Array.from(basketMenu).map(
        ({ id, title, imageSource, price, quantity }) => (
          <BasketCard
            key={Math.floor(Math.random() * 1000) + 1}
            id={id}
            title={truncateString(title, 11)}
            price={formatPrice(price)}
            imgUrl={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            quantity={quantity}
            onDelete={(event) => handleCardDelete(event, id)}
          />
        )
      )}
    </BasketMainStyled>
    // <BasketEmpty />
  );
}

const BasketMainStyled = styled.div`
  height: 675px;
  /* flex: 0; */
  overflow: auto;
  border-radius: 0px 0px 0px 15px;
  background: #f5f5f7;
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow: hidden; */
`;

import React, { useContext } from "react";
import styled from "styled-components";
import BasketEmpty from "./BasketEmpty";
import { theme } from "../../../../../../../theme";
import BasketCard from "./BasketCard";
import { formatPrice } from "../../../../../../../utils/maths";
import { truncateString } from "../../../../../../../utils/truncateString";
import OrderContext from "../../../../../../../context/OrderContext";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";
let TOTAL_PRICE = 0;

export default function BasketMain() {
  // State

  const { basketMenuReal, setBasketMenuReal, total, setTotal } =
    useContext(OrderContext);

  const handleDelete = (cardId) => {
    // Filter out the card with the given ID and update the state
    const updatedMenu = basketMenuReal.filter((card) => card.id !== cardId);
    console.log("basket menu: ", basketMenuReal[0].price);
    // Gère le total:
    const productPrice = basketMenuReal[0].price;
    console.log("total 1: ", total, productPrice);

    TOTAL_PRICE = total - productPrice;
    setTotal(formatPrice(TOTAL_PRICE));

    setBasketMenuReal(updatedMenu);
    console.log("total 2: ", total, productPrice);
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
      {basketMenuReal.length === 0 && <BasketEmpty />}

      {Array.from(basketMenuReal).map(
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

import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import BasketEmpty from "./BasketEmpty";
import { theme } from "../../../../../../../theme";
import BasketCard from "./BasketCard";

import OrderContext from "../../../../../../../context/OrderContext";
import { findObjectById } from "../../../../../../../utils/array";
import { setLocalStorage } from "../../../../../../../utils/window";
import { useParams } from "react-router-dom";
import { fakeBasket } from "../../../../../../../fakeData/fakeBasket";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function BasketMain() {
  // State

  const {
    basketMenu,
    setBasketMenu,
    menu,
    isModeAdmin,
    handleProductSelected,
  } = useContext(OrderContext);

  const params = useParams();
  const userName = params.userName;

  const handleDelete = (cardId) => {
    // Filter out the card with the given ID and update the state
    // const updatedMenu = filter(cardId, basketMenu);
    const updatedBasketMenu = basketMenu.filter((card) => card.id !== cardId);

    setBasketMenu(updatedBasketMenu);
    setLocalStorage(userName, updatedBasketMenu);
  };

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
  };

  const handleOnClick = (id) => {
    if (!isModeAdmin) return;
    handleProductSelected(id);
  };

  // Comportements

  // Affichage

  // if (!basketMenu) return console.log("basketMenu", basketMenu);

  // const checkBasket = () => {
  //   if (!basketMenu) {
  //     setBasketMenu(fakeBasket.LARGE);
  //     console.log("basketMenu ici", basketMenu);
  //   }
  // };

  // checkBasket();

  return (
    <BasketMainStyled>
      {basketMenu === 0 && <BasketEmpty />}
      {basketMenu.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu);

        return (
          <div
            className="basket-card"
            key={basketProduct.id}
          >
            <BasketCard
              {...menuProduct}
              imageSource={
                menuProduct.imageSource
                  ? menuProduct.imageSource
                  : IMAGE_BY_DEFAULT
              }
              quantity={basketProduct.quantity}
              onDelete={(event) => handleCardDelete(event, basketProduct.id)}
              isClickable={isModeAdmin}
              onClick={(event) => handleOnClick(menuProduct.id)}
              // onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null}
              // isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
            />
          </div>
        );
      })}
    </BasketMainStyled>
  );
}
//   return (
//     <BasketMainStyled>
//       {basketMenu.length === 0 && <BasketEmpty />}

//       {Array.from(basketMenu).map(
//         ({ id, title, imageSource, price, quantity }) => (
//           <BasketCard
//             key={Math.floor(Math.random() * 1000) + 1}
//             id={id}
//             // title={truncateString(title, 11)}
//             title={title}
//             price={formatPrice(price)}
//             imgUrl={imageSource ? imageSource : IMAGE_BY_DEFAULT}
//             quantity={quantity}
//             onDelete={(event) => handleCardDelete(event, id)}
//           />
//         )
//       )}
//     </BasketMainStyled>
//     // <BasketEmpty />
//   );
// }

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

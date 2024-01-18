import React, { useContext, useState } from "react";
import styled from "styled-components";
import Card from "./Card.jsx";
import { formatPrice } from "../../../../utils/maths.js";
import { truncateString } from "../../../../utils/truncateString.js";
import OrderContext from "../../../../context/OrderContext.js";
import { fakeMenu } from "../../../../fakeData/fakeMenu.js";
import EmptyMenu from "./EmptyMenu.jsx";
import { checkIfProductisClicked } from "./helper.js";
import { EMPTY_PRODUCT } from "../../../../enums/product.js";
import {
  deepClone,
  findObjectById,
  findIndexById,
} from "../../../../utils/array.js";
import { syncBothMenus } from "../../../../api/product.js";
import { useParams } from "react-router-dom";
import Loader from "../Loader.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { menuAnimation } from "../../../../theme/animations.js";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  // D’abord on définit les states de base (état, données, variable…)
  const {
    menu,
    setMenu,
    productToEdit,
    setProductToEdit,
    isModeAdmin,
    setBasketMenu,
    basketMenu,
    handleProductSelected,
  } = useContext(OrderContext);
  const [defaultMenu] = useState(fakeMenu.LARGE);

  const params = useParams();
  const userName = params.userName;

  // Comportements, les actions, la logique

  const handleDelete = (cardId) => {
    // Filter out the card with the given ID and update the state
    const updatedMenu = menu.filter((card) => card.id !== cardId);
    setMenu(updatedMenu);

    // Delete Item from basket too
    const updatedBasketMenu = basketMenu.filter((card) => card.id !== cardId);
    setBasketMenu(updatedBasketMenu);

    syncBothMenus(userName, updatedMenu);

    // This is to check if the product deleted is the one in the edit form, if it is, then setProductToEdit to empty, so it doesnt display the edit form anymore, as no product is selected.
    cardId === productToEdit.id && setProductToEdit(EMPTY_PRODUCT);
  };

  const resetMenu = () => {
    setMenu(defaultMenu);
    syncBothMenus(userName, defaultMenu);
  };

  const onCardSelect = (cardId) => {
    // Si je fais ça et que la condition l'inqiue, alors le reste de la focntion n'est pas exécutée. (comme un if else en plus court)
    if (!isModeAdmin) return;
    handleProductSelected(cardId);
  };

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
  };

  const onAddToBasket = (id) => {
    //1. copie du state (deepclone)

    const basketCopy = deepClone(basketMenu);
    const productAlreadyInBasket = findObjectById(id, basketCopy);
    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(id, basketCopy);
      return;
    }
    createNewBasketProduct(id, basketCopy, setBasketMenu);
  };

  const incrementProductAlreadyInBasket = (id, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexById(id, basketCopy);
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    setBasketMenu(basketCopy);
  };

  const createNewBasketProduct = (id, basketCopy, setBasketMenu) => {
    const newBasketProduct = {
      id: id,
      quantity: 1,
    };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasketMenu(newBasket);
  };

  // Affichage

  if (menu === undefined) return <Loader />;

  return (
    <TransitionGroup
      component={MenuStyled}
      className="menu"
    >
      {menu.length === 0 && <EmptyMenu resetMenu={resetMenu} />}

      {menu.map(({ id, title, imageSource, price }) => (
        <CSSTransition
          classNames={"menu-animation"}
          key={id}
          timeout={300}
        >
          <Card
            key={id}
            id={id}
            imgUrl={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            title={truncateString(title, 11)}
            price={formatPrice(price)}
            onDelete={(event) => handleCardDelete(event, id)}
            onCardSelect={onCardSelect}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductisClicked(id, productToEdit.id)}
            onAddToBasket={onAddToBasket}
            // onCardDelete={{} => handleCardDelete(id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

const MenuStyled = styled.div`
  /* border: 2px solid blue; */
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
  ${menuAnimation}
`;

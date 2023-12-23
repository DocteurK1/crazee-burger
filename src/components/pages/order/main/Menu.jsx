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
import { deepClone, findInArray } from "../../../../utils/array.js";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";
let TOTAL_PRICE = 0;

export default function Menu() {
  // D’abord on définit les states de base (état, données, variable…)
  const {
    menu,
    setMenu,
    productToEdit,
    setProductToEdit,
    isModeAdmin,
    setIsCollapsed,
    setCurrentTabSelected,
    setBasketMenuReal,
    basketMenuReal,
    total,
    setTotal,
  } = useContext(OrderContext);
  const [defaultMenu] = useState(fakeMenu.LARGE);

  // Comportements, les actions, la logique

  const handleDelete = (cardId) => {
    // Filter out the card with the given ID and update the state
    const updatedMenu = menu.filter((card) => card.id !== cardId);
    setMenu(updatedMenu);
    console.log("Menu Length : ", menu.length);

    // Delete Item from basket too
    const updatedBasketMenu = basketMenuReal.filter(
      (card) => card.id !== cardId
    );
    setBasketMenuReal(updatedBasketMenu);

    // This is to check if the product deleted is the one in the edit form, if it is, then setProductToEdit to empty, so it doesnt display the edit form anymore, as no product is selected.
    cardId === productToEdit.id && setProductToEdit(EMPTY_PRODUCT);
  };

  const resetMenu = () => {
    console.log("reset menu");
    setMenu(defaultMenu);
  };

  const onCardSelect = async (cardId) => {
    // Si je fais ça et que la condition l'inqiue, alors le reste de la focntion n'est pas exécutée. (comme un if else en plus court)
    if (!isModeAdmin) return;

    // Find the selected card in the menu array
    const selectedCard = findInArray(cardId, menu);

    if (selectedCard) {
      // Update the productToEdit state with the selected card's information
      setProductToEdit({
        id: selectedCard.id,
        title: selectedCard.title,
        imageSource: selectedCard.imageSource,
        price: selectedCard.price,
      });

      // await après avoir défini la function comme asynchrone avec async, veux dire que le reste du code s exécute juste quand celle ci est bien terminée
      await setIsCollapsed(false);
      await setCurrentTabSelected("edit");
      // await titleEditRef.current.focus();

      console.log("productToEdit : ", productToEdit);
    }
  };

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
  };

  const onAddToBasket = (id, title, price, imgUrl) => {
    console.log("id: ", id, title, price, imgUrl);
    const basketCopy = deepClone(basketMenuReal);

    const productToAddToBasket = findInArray(id, menu);

    // if y'en a deja un, je change juste la qty, if y'en a a pas, j'en ajoute un.

    const targetId = productToAddToBasket.id;
    const isItemAlreadyInBasket = findInArray(targetId, basketMenuReal);

    if (isItemAlreadyInBasket) {
      // If an item with the same ID is found, do something
      console.log("Item with the same ID found:", isItemAlreadyInBasket);
      // Retrouve l'index du produit déjà ajouté
      const indexOfBasketProductToIncrement = basketMenuReal.findIndex(
        (basketProduct) => basketProduct.id === targetId
      );
      // Incrémente quantity de 1
      basketCopy[indexOfBasketProductToIncrement].quantity += 1;

      setBasketMenuReal(basketCopy);
    } else {
      // If no item with the same ID is found, do something else
      console.log("No item with the same ID found");
      if (productToAddToBasket) {
        console.log("Object found:", productToAddToBasket);
        const newBasketProduct = {
          ...productToAddToBasket,
          quantity: 1,
        };
        const basketUpdated = [newBasketProduct, ...basketCopy];
        setBasketMenuReal(basketUpdated);

        // Gère le total:
        const productPrice = productToAddToBasket.price;
        TOTAL_PRICE = TOTAL_PRICE + productPrice;
        setTotal(formatPrice(TOTAL_PRICE));
      } else {
        console.log("Object not found");
      }
    }
  };

  // Affichage

  return (
    <MenuStyled>
      {menu.length === 0 && <EmptyMenu resetMenu={resetMenu} />}

      {menu.map(({ id, title, imageSource, price }) => (
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
      ))}
    </MenuStyled>
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
`;

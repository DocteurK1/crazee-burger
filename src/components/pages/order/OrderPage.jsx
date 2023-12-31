import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./main/Main.jsx";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import OrderContext from "../../../context/OrderContext.js";
import { fakeBasket } from "../../../fakeData/fakeBasket.js";
import { EMPTY_PRODUCT } from "../../../enums/product.js";
import {
  deepClone,
  findIndexById,
  findObjectById,
} from "../../../utils/array.js";

export default function OrderPage() {
  // D’abord on définit les states de base (état, données, variable…)
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeBasket.LARGE);
  const [productToEdit, setProductToEdit] = useState(EMPTY_PRODUCT);
  const [basketMenu, setBasketMenu] = useState([]);

  // Comportements, les actions, la logique

  const handleProductSelected = async (cardId) => {
    // Find the selected card in the menu array
    const selectedCard = findObjectById(cardId, menu);

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

  const handleAddProduct = (newProduct) => {
    console.log("test : ", newProduct);
    // Pour update un tableau, d'abord je le copie, je manipule la copie, puis j'envoi la copie au setter :
    // 1. Copie du tableau
    const menuCopy = [...menu];

    // 2. Manipulation de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];

    // 3. Update du state via le setter
    setMenu(menuUpdated);

    console.log("Menu Length : ", menu.length);
  };

  const handleEdit = (productBeingEdited) => {
    //1. copy du state
    const menuCopy = deepClone(menu);

    //2. manip de la copie du state
    const indexOfProductToEdit = findIndexById(productBeingEdited.id, menu);
    // const indexOfProductToEdit = menu.findIndexById(
    //   (product) => product.id === productBeingEdited.id
    // );

    menuCopy[indexOfProductToEdit] = productBeingEdited;

    //3. update du state
    setMenu(menuCopy);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAddProduct,
    productToEdit,
    setProductToEdit,
    handleEdit,
    basketMenu,
    setBasketMenu,
    handleProductSelected,
  };

  // L’affichage, le render, via return

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <Navbar />
        <Main />
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  /* border: 3px solid green; */

  /* background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

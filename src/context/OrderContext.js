import { createContext } from "react";

export default createContext({
  username: "",
  setUsername: () => {},
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],
  setMenu: () => {},
  handleAddProduct: () => {},
  handleEdit: () => {},
  handleProductSelected: () => {},

  productToEdit: {},
  setProductToEdit: () => {},

  basketMenu: [],
  setBasketMenu: () => {},
});

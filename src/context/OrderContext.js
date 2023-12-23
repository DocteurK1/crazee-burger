import { createContext } from "react";

export default createContext({
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

  productToEdit: {},
  setProductToEdit: () => {},

  basketMenu: [],
  setBasketMenu: () => {},

  total: 0,
  setTotal: () => {},
});

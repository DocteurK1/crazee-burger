import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { getTabSelected, getTabsConfig } from "./getTabsConfig";

export default function AdminPanel() {
  // State
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  // Comportement

  // Affichage

  return (
    <AdminPanelStyled>
      {currentTabSelected === tabSelected.index && tabSelected.label}
      {/* {isAddSelected && "Ajouer un produit"}
      {isEditSelected && "Modifier un produit"} */}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  /* border: 1px solid blue; */
  height: 250px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  /* box-shadow: ${theme.shadows.subtle}; */
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
`;

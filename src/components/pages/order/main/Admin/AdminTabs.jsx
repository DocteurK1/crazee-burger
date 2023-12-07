import React, { useContext } from "react";
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
  // State

  // On importe le context avec useContext. Et pas besoin de stocker tout ce qui est dans le context dans la variable dans ce composant, on prend les juste et leur setter nécessaires.
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  // Comportements

  const selectTab = (tabSelected) => {
    // Il suffit de changer le state et tout le render dérrière est auto. On retire le composant adminPanel, du coup les boutons se retrouvent en bas. Pas besoin d'update leur position etc...
    setIsCollapsed(false); // Si le panel est fermé, lorsqu on clic sur un des boutons, dans tout les cas on l'ouvre.
    setCurrentTabSelected(tabSelected);
  };

  // Là j'importe mon fichier de config et je stock currentTabsSelected
  const tabs = getTabsConfig(currentTabSelected);

  // Affichage

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />

      {tabs.map((tab) => {
        return (
          <Tab
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => selectTab(tab.index)}
            className={currentTabSelected === tab.index ? "is-active" : ""}
          />
        );
      })}

      {/* <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={() => selectTab("add")}
        className={isAddSelected ? "is-active" : ""}
      />
      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={() => selectTab("edit")}
        className={isEditSelected ? "is-active" : ""}
      /> */}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  border: 1px solid red;

  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;

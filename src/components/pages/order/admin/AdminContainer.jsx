import React, { useState } from "react";
import styled from "styled-components";
import AdminPanel from "../admin/AdminPanel";
import AdminTabs from "../admin/AdminTabs";
import AdminContext from "../../../../context/AdminContext";
import { theme } from "../../../../theme";

export default function AdminContainer({ isModeAdmin }) {
  const [adminPanelSelected, setAdminPanelSelected] =
    useState("Ajouter un produit");

  // State pour l'ID du bouton sélectionné, avec son setter associé; lié au context
  const [activeTab, setActiveTab] = useState(2);

  const adminContextValue = {
    adminPanelSelected,
    setAdminPanelSelected,
    activeTab,
    setActiveTab,
  };

  return (
    <AdminContext.Provider value={adminContextValue}>
      {isModeAdmin ? (
        <AdminContainerStyled>
          <AdminTabs />
          <AdminPanel />
        </AdminContainerStyled>
      ) : null}
    </AdminContext.Provider>
  );
}

const AdminContainerStyled = styled.div`
  /* border: 3px solid blue; */

  height: 299px;
  width: 1400px;
  position: fixed;
  margin-top: 1510px;
  /* bottom: 0; */
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;

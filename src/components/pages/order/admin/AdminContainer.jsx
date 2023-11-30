import React, { useState } from "react";
import styled from "styled-components";
import AdminPanel from "../admin/AdminPanel";
import AdminTabs from "../admin/AdminTabs";
import AdminContext from "../../../../context/AdminContext";

export default function AdminContainer() {
  // D’abord on définit les states de base (état, données, variable…)

  const [adminPanelSelected, setAdminPanelSelected] = useState("Initial Value");

  const tshirtContextValue = { adminPanelSelected, setAdminPanelSelected };

  // Comportements, les actions, la logique

  // L’affichage, le render, via return
  return (
    <>
      <AdminContext.Provider value={tshirtContextValue}>
        <AdminContainerStyled>
          {/* <span>AdminContainer</span> */}
          <AdminTabs />
          <AdminPanel />
        </AdminContainerStyled>
      </AdminContext.Provider>
    </>
  );
}

const AdminContainerStyled = styled.div`
  /* background: red; */
  /* border-style: solid;
  border-color: red;
  border-width: 2px; */
  height: 299px;
  width: 1400px;
  /* Add the following styles to make it appear at the bottom */
  position: fixed;
  margin-bottom: 45px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

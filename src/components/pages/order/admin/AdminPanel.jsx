import React, { useContext } from "react";
import styled from "styled-components";
import AdminContext from "../../../../context/AdminContext";
import { theme } from "../../../../theme";

export default function AdminPanel() {
  // D’abord on définit les states de base (état, données, variable…)

  const currentAdminPanel = useContext(AdminContext);

  // // Comportements, les actions, la logique

  // L’affichage, le render, via return
  return (
    <AdminpanelStyled>
      <br />
      <span>Blabla</span>
      <br />
      <span>Admin Panel Selected: {currentAdminPanel.adminPanelSelected}</span>
      {/* <button onClick={handleClick}>test Button</button> */}
    </AdminpanelStyled>
  );
}

const AdminpanelStyled = styled.div`
  background: white;
  height: 250px;
  width: 1400px;

  /* box-shadow: 0px 6px 8px -2px rgba(0, 0, 0, 0.2); */
  box-shadow: 0px -6px 8px -2px #0000001a;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  /* z-index: 100; */
`;

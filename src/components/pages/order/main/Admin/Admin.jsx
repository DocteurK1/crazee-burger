import React, { useState } from "react";
import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
  // State
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Comportements

  // Affichage
  return (
    <AdminStyled>
      <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

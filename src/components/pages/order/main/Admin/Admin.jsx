import React, { useContext } from "react";
import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import OrderContext from "../../../../../context/OrderContext";

export default function Admin() {
  // State
  const { isCollapsed } = useContext(OrderContext);
  // Comportements

  // Affichage
  return (
    <AdminStyled>
      <AdminTabs />
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

import React, { useState } from "react";
import styled from "styled-components";
import AdminPanel from "../admin/AdminPanel";
import AdminTabs from "../admin/AdminTabs";
import AdminContext from "../../../../context/AdminContext";

export default function AdminContainer({ isModeAdmin }) {
  const [adminPanelSelected, setAdminPanelSelected] = useState("");
  const adminContextValue = { adminPanelSelected, setAdminPanelSelected };

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
  height: 299px;
  width: 1400px;
  position: fixed;
  margin-bottom: 45px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

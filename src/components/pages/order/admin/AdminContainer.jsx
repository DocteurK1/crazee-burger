import React from "react";
import styled from "styled-components";
import AdminPanel from "../admin/AdminPanel";
import AdminTabs from "../admin/AdminTabs";

export default function AdminContainer() {
  return (
    <>
      <AdminContainerStyled>
        <span>AdminContainer</span>
        <AdminTabs />
        <AdminPanel />
      </AdminContainerStyled>
    </>
  );
}

const AdminContainerStyled = styled.div`
  background: red;
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

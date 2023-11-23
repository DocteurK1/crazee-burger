import React from "react";
import styled from "styled-components";
import Tab from "./Tab.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";

export default function AdminTabs() {
  return (
    <>
      <AdminTabsStyled>
        AdminTabs
        <Tab Icon={<FiChevronDown />} />
        <Tab
          Title={"Ajouter un produit"}
          Icon={<AiOutlinePlus />}
        />
        <Tab
          Title={"Modifier un produit"}
          Icon={<MdModeEditOutline />}
        />
      </AdminTabsStyled>
    </>
  );
}

const AdminTabsStyled = styled.div`
  background: blue;
  height: 44px;
  width: 1400px;
  display: flex;
  justify-content: left;

  /* flex-direction: column; */
`;

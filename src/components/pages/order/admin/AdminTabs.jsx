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
        <Tab
          Icon={<FiChevronDown />}
          Width={"45px"}
          Id={1}
        />
        <Tab
          Title={"Ajouter un produit"}
          Icon={<AiOutlinePlus />}
          Width={"210px"}
          Id={2}
        />
        <Tab
          Title={"Modifier un produit"}
          Icon={<MdModeEditOutline />}
          Width={"210px"}
          Id={3}
        />
      </AdminTabsStyled>
    </>
  );
}

const AdminTabsStyled = styled.div`
  /* background: lightgray; */

  /* border-style: solid;
  border-color: blue;
  border-width: 2px; */

  height: 44px;
  width: 1400px;
  display: flex;
  justify-content: left;
  margin-left: 50px;

  /* flex-direction: column; */
`;

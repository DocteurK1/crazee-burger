import React, { useContext } from "react";
import styled from "styled-components";
import Tab from "./Tab.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import AdminContext from "../../../../context/AdminContext.js";

export default function AdminTabs() {
  // D’abord on définit les states de base (état, données, variable…)
  // Ici je récupère le currentAdminSelected et je passe en props via ternary operator le style

  const currentAdminPanel = useContext(AdminContext);
  const currentTab = currentAdminPanel.adminPanelSelected;
  console.log("currentTab : ", currentTab);

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <>
      <AdminTabsStyled>
        <Tab
          Icon={<FiChevronDown />}
          Width={"45px"}
          Id={1}
          // BackgroundColor={"white"}
        />
        <Tab
          Title={"Ajouter un produit"}
          Icon={<AiOutlinePlus />}
          Width={"210px"}
          Id={2}
          // BackgroundColor={"red"}
        />
        <Tab
          Title={"Modifier un produit"}
          Icon={<MdModeEditOutline />}
          Width={"210px"}
          Id={3}
          // BackgroundColor={"black"}
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

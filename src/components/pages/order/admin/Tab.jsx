import React, { useContext } from "react";
import styled from "styled-components";
import AdminContext from "../../../../context/AdminContext";

export default function Tab({ Icon, Title, Width, Id }) {
  // D’abord on définit les states de base (état, données, variable…)

  const info = useContext(AdminContext);
  // console.log("info : ", info.tshirtColor);

  // Comportements, les actions, la logique

  const handleClick = () => {
    if (Id === 1) {
      info.setTshirtColor("Arrow Down");
      console.log("Button 1");
    }
    if (Id === 2) {
      info.setTshirtColor("Ajouter un produit");
      console.log("Button 2");
    }
    if (Id === 3) {
      info.setTshirtColor("Modifier un produit");
      console.log("Button 3");
    }
  };

  // L’affichage, le render, via return
  return (
    <TabStyled
      Width={Width}
      onClick={handleClick}
    >
      {Icon}
      <span>{Title}</span>
    </TabStyled>
  );
}

const TabStyled = styled.button`
  background: white;
  /* border-style: solid; */
  width: ${(props) => props.Width};
  padding-left: 5px;
  margin-left: 0 px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-width: 1px, 1px, 0px, 1px;
  border-style: solid;
  border-color: #e4e5e9;
  cursor: pointer;

  box-shadow: 0px -6px 8px -2px #0000001a;

  span {
    margin-left: 10px;
  }
`;

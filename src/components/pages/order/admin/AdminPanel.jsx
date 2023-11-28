import React, { useContext } from "react";
import styled from "styled-components";
import AdminContext from "../../../../context/AdminContext";

export default function AdminPanel() {
  // D’abord on définit les states de base (état, données, variable…)

  const info = useContext(AdminContext);
  // // info.setTshirtColor("Blabla");
  // console.log("info : ", info.tshirtColor);

  // // Comportements, les actions, la logique

  // L’affichage, le render, via return
  return (
    <AdminpanelStyled>
      <br />
      <span>Blabla</span>
      <br />
      <span>Info: {info.tshirtColor}</span>
      {/* <button onClick={handleClick}>test Button</button> */}
    </AdminpanelStyled>
  );
}

const AdminpanelStyled = styled.div`
  background: white;
  height: 250px;
  width: 1400px;

  box-shadow: 0px -6px 8px -2px #0000001a;

  border-style: solid;
  border-color: green;
  border-width: 2px;
`;

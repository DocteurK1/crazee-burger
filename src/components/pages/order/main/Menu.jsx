import React from "react";
import styled from "styled-components";
import Card from "./Card.jsx";

export default function Menu() {
  return (
    <MenuStyled>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  /* align-item: center; */
  /* background: green; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 10px;
`;

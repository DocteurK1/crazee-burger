import React from "react";
import styled from "styled-components";

export default function Logo() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img
        src="/images/logo-orange.png"
        alt="Logo Crazee Burger"
      ></img>
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  /* background: blue; */
  /* border: 1px solid blue; */
  /* color: white; */
  display: flex;
  align-items: center;
  /* transform: scale(2.5); */
  overflow: hidden;
  /* background-size: cover; */

  h1 {
    display: inline;
    text-align: center;
    color: #ffa01b;
    font-size: 90px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 150px;
    width: 200px;
    margin: 0 5px;
  }
`;
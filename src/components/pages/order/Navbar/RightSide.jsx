import React from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";

// import { Link } from "react-router-dom";
import Profile from "./Profile";

export default function RightSide() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <>
      <RightSideStyled>
        <div className="admin-button">
          <ToggleButton />
        </div>
        <Profile />
      </RightSideStyled>
    </>
  );
}

const RightSideStyled = styled.div`
  /* background: red; */
  display: flex;
  align-items: center;
  padding-right: 50px;

  .admin-button {
    /* background: green; */
  }
`;

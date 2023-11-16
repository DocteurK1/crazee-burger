import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styled from "styled-components";

export default function Navbar() {
  return (
    <>
      <StyledNavbar>
        <LeftSide />
        <RightSide />
      </StyledNavbar>
    </>
  );
}

const StyledNavbar = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  /* transform: scale(2.5); */
  overflow: hidden;
  width: 1400px;
  height: 100px;
  margin: auto;
`;

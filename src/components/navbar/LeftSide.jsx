import React from "react";
import styled from "styled-components";
import Logo from "../reusable-ui/Logo";
// import Logo from "../../reusable-ui/Logo";

export default function LeftSide() {
  return (
    <>
      <StyledLeftSide>{/* <Logo /> */}</StyledLeftSide>;
    </>
  );
}

const StyledLeftSide = styled.div`
  background-color: green;
  width: 240px;
  height: 98px;
  /* display: flex; */
  //float: right;
`;

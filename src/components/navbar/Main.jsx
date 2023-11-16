import React from "react";
import styled from "styled-components";

export default function Main() {
  return <StyledMain>Main</StyledMain>;
}

const StyledMain = styled.div`
  background-color: yellow;
  /* display: flex; */
  /* align-items: center; */
  margin: auto;
  padding: auto;

  width: 1400px;
  height: 909px;
`;

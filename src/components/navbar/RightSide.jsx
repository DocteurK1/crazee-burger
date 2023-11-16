import React from "react";
import styled from "styled-components";

export default function RightSide() {
  return <StyledRightSide>RightSide</StyledRightSide>;
}

const StyledRightSide = styled.div`
  background-color: blue;
  display: flex;
  margin-left: auto; /* Right-align the div */
  width: 120px;
  height: 44px;
`;

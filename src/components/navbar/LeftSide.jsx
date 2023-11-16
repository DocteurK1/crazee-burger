import React from "react";
import styled from "styled-components";
import Logo from "../reusable-ui/Logo";

export default function LeftSide() {
  return (
    <>
      <StyledLeftSide>
        <StyledLogo>
          <Logo />
        </StyledLogo>
      </StyledLeftSide>
    </>
  );
}

const StyledLeftSide = styled.div`
  background-color: green;
  width: 240px;
  height: 98px;
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
`;

const StyledLogo = styled.div`
  transform: scale(0.4);
  margin-left: -170px; /* Left margin of 20px */
`;

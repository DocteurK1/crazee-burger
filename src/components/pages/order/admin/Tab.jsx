import React from "react";
import styled from "styled-components";

export default function Tab({ Icon, Title, Width }) {
  return (
    <TabStyled>
      {Icon}
      <span>{Title}</span>
    </TabStyled>
  );
}

const TabStyled = styled.div`
  background: lightblue;
  border-style: solid;
  width: 200px;
  padding-left: 10px;
  margin-left: 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;

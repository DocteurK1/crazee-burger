import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled className="sentence">
      <div className="space">
        Cliquer sur un produit du menu pour le modifier{" "}
        <span className="live-update">en temps réel</span>
      </div>
    </EditInfoMessageStyled>
  );
}

const EditInfoMessageStyled = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};
  .space {
    padding-top: 15px;
  }
  .live-update {
    text-decoration: underline;
  }
`;

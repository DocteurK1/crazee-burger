import React, { useContext } from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import Profile from "./Profile";
import { toast } from "react-toastify";
import OrderContext from "../../../../context/OrderContext";

export default function RightSide() {
  // D’abord on définit les states de base (état, données, variable…)

  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  // Comportements, les actions, la logique

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin); // set isModeAdmin à son contraire true/false
  };

  // L’affichage, le render, via return

  return (
    <>
      <RightSideStyled>
        <div className="admin-button">
          <ToggleButton
            isChecked={isModeAdmin}
            labelIfChecked=" Désactiver le mode admin"
            labelIfUnchecked="Activer le mode admin"
            onToggle={displayToastNotification}
          />
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

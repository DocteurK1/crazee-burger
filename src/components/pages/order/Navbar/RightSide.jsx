import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import "react-toastify/dist/ReactToastify.css";

// import { Link } from "react-router-dom";
import Profile from "./Profile";
import { ToastContainer, toast } from "react-toastify";

export default function RightSide() {
  // D’abord on définit les states de base (état, données, variable…)
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  // Comportements, les actions, la logique

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
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
    setIsModeAdmin(!isModeAdmin); // set isModeAdmin à son traire true/false
  };

  // L’affichage, le render, via return

  return (
    <>
      <RightSideStyled>
        <div className="admin-button">
          <ToggleButton
            labelIfChecked=" Désactiver le mode admin"
            labelIfUnchecked="Activer le mode admin"
            onToggle={displayToastNotification}
          />
        </div>
        <Profile />
        <ToastContainer />
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

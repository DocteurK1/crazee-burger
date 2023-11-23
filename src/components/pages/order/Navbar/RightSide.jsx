import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import "react-toastify/dist/ReactToastify.css";

// import { Link } from "react-router-dom";
import Profile from "./Profile";
import { ToastContainer, toast } from "react-toastify";
import { theme } from "../../../../theme";

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
        <ToastContainer
          className="toaster"
          bodyClassName="body-toast"
        />
      </RightSideStyled>
    </>
  );
}

const RightSideStyled = styled.div`
  /* background: red; */
  display: flex;
  align-items: center;
  padding-right: 50px;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }

  .admin-button {
    /* background: green; */
  }
`;

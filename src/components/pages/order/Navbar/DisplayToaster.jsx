import React from "react";
import { theme } from "../../../../theme";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default function DisplayToaster() {
  // D’abord on définit les states de base (état, données, variable…)

  // Comportements, les actions, la logique

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

  // L’affichage, le render, via return

  return (
    <NavbarRightSideIncompletStyled>
      <ToastContainer
        className="toaster"
        bodyClassName="body-toast"
      />
    </NavbarRightSideIncompletStyled>
  );
}

const NavbarRightSideIncompletStyled = styled.div`
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
`;

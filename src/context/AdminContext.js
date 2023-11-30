import { createContext } from "react";

export default createContext({
  adminPanelSelected: "",
  setAdminPanelSelected: () => {},
  isPanelOpen: false,
});

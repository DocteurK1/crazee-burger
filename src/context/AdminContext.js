import { createContext } from "react";

export default createContext({
  adminPanelSelected: "",
  setAdminPanelSelected: () => {},
  activeTab: 2,
  setActiveTab: () => {},
  isPanelOpen: true,
});

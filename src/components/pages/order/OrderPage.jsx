import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

export default function OrderPage() {
  // D’abord on définit les states de base (état, données, variable…)

  // // Comportements, les actions, la logique

  // L’affichage, le render, via return

  return (
    <>
      {/* <div>
        <h1>Bonjour {userName}</h1>
        <button onClick={handleClick}>Déconnexion</button>
      </div> */}
      <Navbar />
      <Main />
    </>
  );
}

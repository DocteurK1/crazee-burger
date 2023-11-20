import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  // D’abord on définit les states de base (état, données, variable…)
  const navigate = useNavigate();

  // Comportements, les actions, la logique
  const handleClick = (event) => {
    navigate("/");
  };

  // L’affichage, le render, via return

  return (
    <div>
      <h1>Error Page</h1>
      <button onClick={handleClick}>Déconnexion</button>
      {/* <Link to="/"> Exemple de link simple sans usenavigate avec react router
        <button>Déconnexion</button>
      </Link> */}
    </div>
  );
}

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function OrderPage() {
  // D’abord on définit les states de base (état, données, variable…)
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userId;
  console.log("user id: ", userId);

  // Comportements, les actions, la logique
  const handleClick = (event) => {
    navigate("/");
  };

  // L’affichage, le render, via return

  return (
    <div>
      <h1>Bonjour {userId}</h1>
      <button onClick={handleClick}>Déconnexion</button>
    </div>
  );
}

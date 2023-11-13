import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // D’abord on définit les states de base (état, données, variable…)

  let [firstName, setFirstName] = useState("");
  const navigate = useNavigate();
  // Comportements, les actions, la logique

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/order/" + firstName);
    setFirstName("");
  };

  const handleChange = (event) => {
    setFirstName(event.target.value);
    console.log("firstName value: ", firstName);
  };

  // L’affichage, le render, via return

  return (
    <>
      <form
        action="submit"
        onSubmit={handleSubmit}
      >
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
        <input
          value={firstName}
          type="text"
          name="inputField"
          id="inputField"
          onChange={handleChange}
          placeholder="Entrez votre prénom"
          required
        />
        <button>Accédez à votre espace</button>
      </form>
    </>
  );
}

export default LoginForm;

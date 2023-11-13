import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <LoginFormStyled
        action="submit"
        onSubmit={handleSubmit}
      >
        <h1 style={whiteTitle}>Bienvenue chez nous !</h1>
        <br />
        <h2 style={whiteTitle}>Connectez-vous</h2>
        <input
          value={firstName}
          type="text"
          name="inputField"
          id="inputField"
          onChange={handleChange}
          placeholder="Entrez votre prénom"
          required
        />
        <button>Accéder à mon espace</button>
      </LoginFormStyled>
    </>
  );
}

const whiteTitle = { color: "white" };

const LoginFormStyled = styled.form`
  /* background: pink; */
  height: 500px;
  padding-top: 200px;
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginForm;

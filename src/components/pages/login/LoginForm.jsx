import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

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
        <H1Styles>Bienvenue chez nous !</H1Styles>
        <hr
          style={{
            color: "orange",
            borderColor: "orange",
            height: "10px",
            width: "400px",
          }}
        />
        <H2Styles>Connectez-vous</H2Styles>
        <StyledInput
          value={firstName}
          type="text"
          name="inputField"
          id="inputField"
          onChange={handleChange}
          placeholder="Entrez votre prénom"
          required
        />
        <StyledButton>Accéder à mon espace</StyledButton>
      </LoginFormStyled>
    </>
  );
}

// Styling for H1
const H1Styles = styled.p`
  display: flex;
  color: white;
  padding-top: 250px;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  font-size: 48px;
`;

// Styling for H2
const H2Styles = styled.p`
  display: flex;
  color: white;
  flex-direction: column;
  margin-top: auto;
  // justify-content: center;
  // align-items: center;
  font-size: 36px;
  color: white;
`;

// Styling for the form
const LoginFormStyled = styled.form`
  /* background: pink; */
  height: 0px;
  padding-top: 0px;
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 53px;
  color: ${theme.colors.primary};
  /* background-color: ${theme.colors.primary}; */
  padding: 18px 106px; /* Use spaces, not commas, to separate values */
  border-radius: 5px;
  border: 0px solid; /* Specify border style, e.g., solid */
`;

const StyledButton = styled.button`
  width: 400px;
  height: 53px;
  color: white;
  background-color: ${theme.colors.primary};
  margin-top: 36px;
  padding: 18px 106px; /* Use spaces, not commas, to separate values */
  border-radius: 5px;
  border: 0px solid; /* Specify border style, e.g., solid */
`;

export default LoginForm;

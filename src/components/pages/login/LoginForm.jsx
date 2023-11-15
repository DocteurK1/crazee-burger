import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";

export default function LoginForm() {
  // D’abord on définit les states de base (état, données, variable…)

  let [value, setValue] = useState("");
  const navigate = useNavigate();

  // Comportements, les actions, la logique

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/order/" + value);
    setValue("");
  };

  const onChange = (event) => {
    setValue(event.target.value);
    console.log("firstName value: ", value);
  };

  // L’affichage, le render, via return

  return (
    <>
      <LoginFormStyled
        action="submit"
        onSubmit={handleSubmit}
      >
        <div>
          <h1>Bienvenue chez nous !</h1>
          <hr />
          <h2>Connectez-vous</h2>
        </div>
        <TextInput
          value={value}
          onChange={onChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle className="icon" />}
        />

        <button className="button-with-icon">
          <span>Accéder à mon espace</span>
          <IoChevronForward className="icon" />
        </button>
      </LoginFormStyled>
    </>
  );
}

// Styling for the form
const LoginFormStyled = styled.form`
  /* background: green; */
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;
  /* display: flex;
  flex-direction: column; */

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: 70px;
  }

  h2 {
    color: white;
    margin: 20px 10px 10px;
    font-size: 35px;
  }

  .button-with-icon {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: orange;
    border: 1px solid orange;

    &:hover:not(:disabled) {
      background-color: white;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }

    &:active {
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-left: 10px;
    }
  }
`;

// export default LoginForm;

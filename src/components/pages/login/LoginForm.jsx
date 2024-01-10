import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme";
import { useUserLogic } from "../../../api/useUserLogic";
import OrderContext from "../../../context/OrderContext";
import { syncBothMenus } from "../../../api/product";

export default function LoginForm() {
  // D’abord on définit les states de base (état, données, variable…)
  const { getUser, createUser } = useUserLogic("exampleUserName");
  // let [username, setUsername] = useState("");
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  // Comportements, les actions, la logique

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/order/" + username);
    // createUser(value);
    // getUser(username);
    setUsername("");
    getUser(username);
  };

  const onChange = (event) => {
    setUsername(event.target.value);
    console.log("firstName value: ", username);
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
          value={username}
          onChange={onChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle className="icon" />}
        />
        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="icon" />}
          // onSubmit={handleSubmit} -- L evenement viens du bas vers le haut, depuis le btn qui est ds le composant
        />
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
  padding: 0px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;
  /* display: flex;
  flex-direction: column; */

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: 70px;
  }

  h2 {
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.size.P4};
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin-left: 10px;
  }
`;

// export default LoginForm;

import React from "react";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { theme } from "../../theme";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function RightSide() {
  // D’abord on définit les states de base (état, données, variable…)
  //   const navigate = useNavigate();
  const params = useParams();
  const userName = params.userName;
  console.log("User name: ", userName);

  // Comportements, les actions, la logique

  //   const handleClick = (event) => {
  //     navigate("/");
  //   };
  // L’affichage, le render, via return

  return (
    <>
      <StyledRightSide>
        <h1>
          Hey, <span>{userName}</span>
        </h1>
        <Link to={"/"}>Se déconnecter</Link>
      </StyledRightSide>
      <StyledIcon>
        <FaRegUserCircle />
      </StyledIcon>
    </>
  );
}

const StyledRightSide = styled.div`
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  margin-left: auto; /* Right-align the div */
  width: 80px;
  height: 44px;
  padding-right: 10px;

  h1 {
    color: ${theme.colors.white};
    font-family: "Open sans", sans-serif;
    font-size: 16px;
    margin-top: 2px;
    margin-bottom: 0px; /* Adjust the bottom margin */
    color: ${theme.colors.greyBlue};
  }

  span {
    color: ${theme.colors.white};
    font-family: "Open sans", sans-serif;
    font-weight: ${theme.fonts.weights.bold};
    font-size: 16px;
    margin-top: 5px;
    color: ${theme.colors.primary};
  }

  // Le a s'applique au Link de react router comme si c etait un a href
  a {
    color: ${theme.colors.white};
    font-family: "Open sans", sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    color: ${theme.colors.greyBlue};
    font-size: 10px;
    margin-top: 5px;
    text-decoration: none;
  }
`;

const StyledIcon = styled.div`
  font-size: 36px;
  padding-right: 50px;
  color: ${theme.colors.greyBlue};
`;

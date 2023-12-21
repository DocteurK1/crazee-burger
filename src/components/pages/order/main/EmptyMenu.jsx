import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";

export default function EmptyMenu({ resetMenu }) {
  // State
  const { isModeAdmin } = useContext(OrderContext);

  // Comportement

  // Affichage

  return (
    <EmptyMenuStyled>
      {isModeAdmin ? (
        <div>
          <div className="title">Le menu est vide ?</div>
          <div className="sub-title">
            Cliquez ci-dessous pour le réinitialiser
          </div>
          <button className="reset-button" onClick={resetMenu}>
            Générer de nouveaux produits
          </button>
        </div>
      ) : (
        <div>
          <div className="title">Victime de notre succès ! :D</div>
          <div className="sub-title">
            De nouvelles recettes sont en cours de préparation.
          </div>
          <div className="sub-title-2">À très vite !</div>
        </div>
      )}
    </EmptyMenuStyled>
  );
}

const EmptyMenuStyled = styled.div`
  /* border: 2px solid orange; */
  width: 100%;
  grid-column: 1 / -1;
  height: 100vh;
  grid-template-columns: 1fr;
  /* display: inline-flex; */
  align-items: center;
  justify-content: center;

  .title {
    padding-top: 300px;
    color: #747b91;
    text-align: center;
    font-family: Amatic SC;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /* justify-items: center; */
  }
  .sub-title {
    padding-top: 21px;
    padding-bottom: 21px;
    color: #747b91;
    text-align: center;
    font-family: Amatic SC;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* justify-items: center; */
  }
  .sub-title-2 {
    color: #747b91;
    text-align: center;
    font-family: Amatic SC;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* justify-items: center; */
  }

  .reset-button {
    display: block;
    border-radius: 5px;
    border: 1px solid #ff9f1b;
    background: #ff9f1b;
    /* display: inline-flex; */
    padding: 19px 24.047px 19px 25px;
    /* align-items: flex-start; */
    color: #fff;
    text-align: center;
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 12px; /* 100% */
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import AddFormInput from "../../../../../reusable-ui/AddFormInput.jsx";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";

export default function AddForm() {
  // State
  let [value, setValue] = useState("");
  let [productNameValue, setProductNameValue] = useState("");
  let [productUrlValue, setProductUrlValue] = useState("");
  let [productPrice, setProductPrice] = useState("");

  // Comportements

  const onProductNameChange = (event) => {
    setProductNameValue(event.target.value);
    console.log("Product Name : ", productNameValue);
  };

  const onProductUrlChange = (event) => {
    setProductUrlValue(event.target.value);
    console.log("Product Url : ", productUrlValue);
  };

  const onProductPriceeChange = (event) => {
    setProductPrice(event.target.value);
    console.log("Product Price : ", productPrice);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Product Name : ", productNameValue);
    console.log("Product Url : ", productUrlValue);
    console.log("Product Price : ", productPrice);
  };

  // Affichage

  return (
    <AddFormStyled onSubmit={onSubmit}>
      <div className="img-holder">
        {productUrlValue !== "" ? (
          <img src={productUrlValue} alt="Product" />
        ) : (
          <div>Aucune image</div>
        )}
      </div>
      <div className="text-input">
        <AddFormInput
          value={value}
          onChange={onProductNameChange}
          placeholder={"Produit (ex: Super Burger)"}
          Icon={<FaHamburger className="icon" />}
        />
        <AddFormInput
          value={value}
          onChange={onProductUrlChange}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
          Icon={<BsFillCameraFill className="icon" />}
        />
        <AddFormInput
          value={value}
          onChange={onProductPriceeChange}
          placeholder={"Prix"}
          Icon={<MdOutlineEuro className="icon" />}
        />

        {/* TO FIX: Refresh lorsque je submit ?! */}

        <button className="submit-button" onClick={onSubmit}>
          Ajouter un nouveau produit au menu
        </button>
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid green;
  /* background: pink; */
  height: 100%;
  display: flex;
  padding-left: 87px;

  .img-holder {
    margin-top: 30px;
    height: 120px;
    width: 215px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #93a2b1;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    border-radius: 5px;
    border: 1px solid black;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .text-input {
    margin-top: 21px;
    margin-left: 20px;
    width: 645px;
    /* background: black; */
  }

  .submit-button {
    margin-top: 10px;
    width: 275px;
    height: 34px;
    border-radius: 5px;
    border: 1px solid #60bd4f;
    background: #60bd4f;

    /* display: inline-flex; */
    padding: 10px 29px 9 29px;
    align-items: flex-start;

    color: #fff;
    text-align: center;
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    cursor: pointer;
  }
`;

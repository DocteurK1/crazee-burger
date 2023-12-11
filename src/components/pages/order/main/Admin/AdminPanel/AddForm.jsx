import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import AddFormInput from "../../../../../reusable-ui/AddFormInput.jsx";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import OrderContext from "../../../../../../context/OrderContext.js";
import { FiCheckCircle } from "react-icons/fi";

export default function AddForm() {
  // State
  const defaultImage = "/images/coming-soon.png";
  let [productNameValue, setProductNameValue] = useState("");
  let [productUrlValue, setProductUrlValue] = useState("");
  let [productPrice, setProductPrice] = useState("");
  const { handleAddProduct } = useContext(OrderContext);
  let [showSuccess, setShowSuccess] = useState(false);

  // Comportements

  const onProductNameChange = (event) => {
    setProductNameValue(event.target.value);
    console.log("Product Name : ", productNameValue);
  };

  const onProductUrlChange = (event) => {
    const value = event.target.value;
    console.log("Product Url:", value);

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (urlRegex.test(value)) {
      console.log("Valid URL");
      setProductUrlValue(value);
    } else {
      console.log("Invalid URL");
      setProductUrlValue(defaultImage);
      console.log("image url: ", productUrlValue);
    }
  };

  const onProductPriceChange = (event) => {
    setProductPrice(event.target.value);
    console.log("Product Price : ", productPrice);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log("Product Name : ", productNameValue);
    console.log("Product Url : ", productUrlValue);
    console.log("Product Price : ", productPrice);

    const newProduct = {
      id: new Date().getTime(),
      title: productNameValue,
      imageSource: productUrlValue ? productUrlValue : defaultImage,
      price: productPrice,
    };
    handleAddProduct(newProduct);

    // Set a flag to show the div
    setShowSuccess(true);

    // Hide the div after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
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
          value={productNameValue}
          onChange={onProductNameChange}
          placeholder={"Produit (ex: Super Burger)"}
          Icon={<FaHamburger className="icon" />}
        />
        <AddFormInput
          value={productUrlValue}
          onChange={onProductUrlChange}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
          Icon={<BsFillCameraFill className="icon" />}
        />
        <AddFormInput
          value={productPrice}
          onChange={onProductPriceChange}
          placeholder={"Prix"}
          Icon={<MdOutlineEuro className="icon" />}
        />

        {/* TO FIX: Refresh lorsque je submit ?! */}

        <button className="submit-button" onClick={onSubmit}>
          Ajouter un nouveau produit au menu
        </button>
        {showSuccess && (
          <div className="success-message">
            {<FiCheckCircle />} Ajouté avec succès !
          </div>
        )}
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
  .submit-button:hover {
    background: #fff;
    color: #60bd4f; /* Update this with the desired text color */
  }

  .success-message {
    color: #60bd4f;
    font-family: Open Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
  }
`;

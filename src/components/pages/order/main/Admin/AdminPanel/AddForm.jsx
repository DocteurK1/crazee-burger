import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import AddFormInput from "../../../../../reusable-ui/AddFormInput.jsx";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import OrderContext from "../../../../../../context/OrderContext.js";
import { FiCheckCircle } from "react-icons/fi";
import { EMPTY_PRODUCT } from "../../../../../../enums/product.js";
import { useDisplaySuccessMessage } from "../../../../../../hooks/useDisplaySuccessMessage.js";

export default function AddForm() {
  // State
  const { handleAddProduct } = useContext(OrderContext);
  const [newProduct, setnewProduct] = useState(EMPTY_PRODUCT);
  const { showSuccess, displaySuccessMessage } = useDisplaySuccessMessage(2000);

  // Comportements

  const onFormChange = (event) => {
    const newValue = event.target.value;
    const inputName = event.target.name;
    setnewProduct({ ...newProduct, [inputName]: newValue });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const id = crypto.randomUUID();
    const newProductToAdd = {
      ...newProduct,
      id,
    };
    handleAddProduct(newProductToAdd);
    setnewProduct(EMPTY_PRODUCT);

    // Ici j appel le custom hook
    displaySuccessMessage();
  };

  //   // Set a flag to show the div
  //   setShowSuccess(true);

  //   // Hide the div after 2 seconds
  //   setTimeout(() => {
  //     setShowSuccess(false);
  //   }, 2000);
  // };

  // Affichage

  return (
    <AddFormStyled onSubmit={onSubmit}>
      <div className="img-holder">
        {newProduct.imageSource ? (
          <img
            src={newProduct.imageSource}
            alt={newProduct.title}
          />
        ) : (
          <div>Aucune image</div>
        )}
      </div>
      <div className="text-input">
        <AddFormInput
          name="title"
          value={newProduct.title}
          onChange={onFormChange}
          placeholder={"Produit (ex: Super Burger)"}
          Icon={<FaHamburger className="icon" />}
        />
        <AddFormInput
          name="imageSource"
          value={newProduct.imageSource}
          onChange={onFormChange}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
          Icon={<BsFillCameraFill className="icon" />}
        />
        <AddFormInput
          name="price"
          value={newProduct.price}
          onChange={onFormChange}
          placeholder={"Prix"}
          Icon={<MdOutlineEuro className="icon" />}
        />

        {/* TO FIX: Refresh lorsque je submit ?! */}

        <button
          className="submit-button"
          onClick={onSubmit}
        >
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
  /* border: 2px solid green; */
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

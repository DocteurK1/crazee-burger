import React, { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import AddFormInput from "../../../../../reusable-ui/AddFormInput";
import EditInfoMessage from "./EditInfoMessage";
import SavingMessage from "./SavingMessage";
import { useDisplaySuccessMessage } from "../../../../../../hooks/useDisplaySuccessMessage";

export default function EditForm() {
  // State

  const { productToEdit, setProductToEdit, handleEdit } =
    useContext(OrderContext);

  const [valueOnFocusTitle, setValueOnFocusTitle] = useState();
  const [valueOnFocusImg, setValueOnFocusImg] = useState();
  const [valueOnFocusPrice, setValueOnFocusPrice] = useState();

  const { showSuccess: isSaved, displaySuccessMessage } =
    useDisplaySuccessMessage();

  // Comportements

  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingEdited = {
      ...productToEdit,
      [name]: value,
    };
    setProductToEdit(productBeingEdited); // Cette ligne update le formulaire
    handleEdit(productBeingEdited); // Cette ligne update le menu
  };

  const handleOnFocusTitle = (event) => {
    const inputValueOnFocus = event.target.value;
    setValueOnFocusTitle(inputValueOnFocus);
  };

  const handleOnFocusImg = (event) => {
    const inputValueOnFocus = event.target.value;
    setValueOnFocusImg(inputValueOnFocus);
  };

  const handleOnFocusPrice = (event) => {
    const inputValueOnFocus = event.target.value;
    setValueOnFocusPrice(inputValueOnFocus);
  };

  const handleOnBlurTitle = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocusTitle !== valueOnBlur) {
      displaySuccessMessage();
    }
  };

  const handleOnBlurImg = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocusImg !== valueOnBlur) {
      displaySuccessMessage();
    }
  };

  const handleOnBlurPrice = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocusPrice !== valueOnBlur) {
      displaySuccessMessage();
    }
  };

  // Affichage

  return (
    <AddFormStyled>
      <div className="img-holder">
        {productToEdit.imageSource ? (
          <img
            src={productToEdit.imageSource}
            alt={productToEdit.title}
          />
        ) : (
          <div>Aucune image</div>
        )}
      </div>
      <div className="text-input">
        <AddFormInput
          name="title"
          value={productToEdit.title}
          onChange={handleChange}
          placeholder={"Produit (ex: Super Burger)"}
          Icon={<FaHamburger className="icon" />}
          onFocus={handleOnFocusTitle}
          onBlur={handleOnBlurTitle}
        />
        <AddFormInput
          name="imageSource"
          value={productToEdit.imageSource}
          onChange={handleChange}
          onFocus={handleOnFocusImg}
          onBlur={handleOnBlurImg}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
          Icon={<BsFillCameraFill className="icon" />}
        />
        <AddFormInput
          name="price"
          value={productToEdit.price}
          onChange={handleChange}
          onFocus={handleOnFocusPrice}
          onBlur={handleOnBlurPrice}
          placeholder={"Prix"}
          Icon={<MdOutlineEuro className="icon" />}
        />
        {isSaved ? <SavingMessage /> : <EditInfoMessage />}
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
  }
`;

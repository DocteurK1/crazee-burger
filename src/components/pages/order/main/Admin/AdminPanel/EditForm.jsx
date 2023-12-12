import React, { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";

export default function EditForm() {
  const { productToEdit } = useContext(OrderContext);
  const [product, setproduct] = useState(productToEdit);

  const testContext = () => {
    console.log("productToEdit", product?.title);
  };
  testContext();

  return <div>EditForm</div>;
}

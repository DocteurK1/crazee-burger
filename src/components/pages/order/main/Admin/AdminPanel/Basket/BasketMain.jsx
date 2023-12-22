import React, { useContext } from "react";
import styled from "styled-components";
import BasketEmpty from "./BasketEmpty";
import { theme } from "../../../../../../../theme";
import BasketCard from "./BasketCard";
import { formatPrice } from "../../../../../../../utils/maths";
import { truncateString } from "../../../../../../../utils/truncateString";
import OrderContext from "../../../../../../../context/OrderContext";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function BasketMain() {
  // State
  // const [basketMenu, setBasketMenu] = useState(fakeBasket.LARGE);
  // const [quantityOrdered2, setQuantityOrdered2] = useState(2);
  const { basketMenuReal } = useContext(OrderContext);

  // Comportements

  // Affichage
  return (
    <BasketMainStyled>
      {basketMenuReal.length === 0 && <BasketEmpty />}

      {Array.from(basketMenuReal).map(
        ({ id, title, imageSource, price, quantity }) => (
          <BasketCard
            key={Math.floor(Math.random() * 1000) + 1}
            id={Math.floor(Math.random() * 1000) + 1}
            title={truncateString(title, 11)}
            price={formatPrice(price)}
            imgUrl={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            quantity={quantity}
          />
        )
      )}
    </BasketMainStyled>
    // <BasketEmpty />
  );
}

const BasketMainStyled = styled.div`
  height: 675px;
  /* flex: 0; */
  overflow: auto;
  border-radius: 0px 0px 0px 15px;
  background: #f5f5f7;
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow: hidden; */
`;

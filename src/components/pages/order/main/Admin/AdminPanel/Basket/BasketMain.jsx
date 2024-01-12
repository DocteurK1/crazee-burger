import React, { useContext } from "react";
import styled from "styled-components";
import BasketEmpty from "./BasketEmpty";
import { theme } from "../../../../../../../theme";
import BasketCard from "./BasketCard";

import OrderContext from "../../../../../../../context/OrderContext";
import { findObjectById } from "../../../../../../../utils/array";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function BasketMain() {
  // State

  const {
    basketMenu,
    setBasketMenu,
    menu,
    isModeAdmin,
    handleProductSelected,
  } = useContext(OrderContext);

  const handleDelete = (cardId) => {
    // Filter out the card with the given ID and update the state
    // const updatedMenu = filter(cardId, basketMenu);
    const updatedMenu = basketMenu.filter((card) => card.id !== cardId);

    setBasketMenu(updatedMenu);
  };

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
  };

  const handleOnClick = (id) => {
    if (!isModeAdmin) return;
    handleProductSelected(id);
  };

  // Comportements

  // Affichage

  return (
    <BasketMainStyled>
      {basketMenu.length === 0 && <BasketEmpty />}
      <TransitionGroup>
        {basketMenu.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menu);

          return (
            <CSSTransition
              appear={true}
              classNames={"abricot"}
              key={basketProduct.id}
              timeout={500}
            >
              <div
                className="basket-card"
                // key={basketProduct.id}
              >
                <BasketCard
                  className={"pomme"}
                  {...menuProduct}
                  imageSource={
                    menuProduct.imageSource
                      ? menuProduct.imageSource
                      : IMAGE_BY_DEFAULT
                  }
                  quantity={basketProduct.quantity}
                  onDelete={(event) =>
                    handleCardDelete(event, basketProduct.id)
                  }
                  isClickable={isModeAdmin}
                  onClick={(event) => handleOnClick(menuProduct.id)}
                  // className={"pomme"}
                  // onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null}
                  // isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketMainStyled>
  );
}

//

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

  .abricot-appear {
    /* .pomme { */
    transform: translateX(100px);
    opacity: 0%;
    /* } */
  }
  .abricot-appear-active {
    /* .pomme { */
    transition: 0.5s;
    transform: translateX(0px);
    opacity: 100%;
    /* } */
  }

  .abricot-enter {
    /* .pomme { */
    transform: translateX(100px);
    opacity: 0%;
    /* } */
  }
  .abricot-enter-active {
    /* .pomme { */
    transition: 0.5s;
    transform: translateX(0px);
    opacity: 100%;
    /* } */
  }

  .abricot-exit {
    /* .pomme { */
    transform: translateX(0px);
    opacity: 100%;
    /* } */
  }
  .abricot-exit-active {
    /* .pomme { */
    transform: translateX(-100px);
    opacity: 0%;
    transition: 0.5s;
    /* } */
  }
`;

// return (
//   <BasketMainStyled>
//     <TransitionGroup>
//       {basketMenu.length === 0 && <BasketEmpty />}
//       {basketMenu.map((basketProduct) => {
//         const menuProduct = findObjectById(basketProduct.id, menu);

//         return (
//           <CSSTransition
//             appear={true}
//             classNames={"abricot"}
//             key={basketProduct.id}
//             timeout={500}
//           >
//             <div
//               className="basket-card"
//               key={basketProduct.id}
//             >
//               <BasketCard
//                 {...menuProduct}
//                 imageSource={
//                   menuProduct.imageSource
//                     ? menuProduct.imageSource
//                     : IMAGE_BY_DEFAULT
//                 }
//                 quantity={basketProduct.quantity}
//                 onDelete={(event) =>
//                   handleCardDelete(event, basketProduct.id)
//                 }
//                 isClickable={isModeAdmin}
//                 onClick={(event) => handleOnClick(menuProduct.id)}
//                 className={"pomme"}
//                 // onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null}
//                 // isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
//               />
//             </div>
//           </CSSTransition>
//         );
//       })}
//     </TransitionGroup>
//   </BasketMainStyled>
// );
// }

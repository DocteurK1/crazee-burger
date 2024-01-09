import { getMenu } from "../api/product";
import { fakeBasket } from "../fakeData/fakeBasket";
import { getLocalStorage } from "../utils/window";
import { useEffect } from "react";
// import { fakeBasket } from "../../../fakeData/fakeBasket.js";

export const useInitUserSessions = (
  userName,
  setBasketMenu,
  setMenu,
  basketMenu
) => {
  //   const { setBasketMenu } = useContext(OrderContext);

  //   const params = useParams();
  //   const userName = params.userName;

  const initialiseMenu = async () => {
    const menuReceived = await getMenu(userName);
    setMenu(menuReceived);
    // console.log("menuReceived", menuReceived);
  };

  const initialiseBasket = () => {
    const basketReceived = getLocalStorage(userName);
    console.log("basketReceived", basketReceived);
    setBasketMenu(basketReceived);
  };

  const initialiseUserSession = async () => {
    await initialiseMenu();
    initialiseBasket();
  };

  useEffect(() => {
    initialiseUserSession();
  }, []);
};

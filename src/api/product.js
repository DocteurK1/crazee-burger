import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import { fakeMenu } from "../fakeData/fakeMenu";

// const { setMenu, menu } = useContext(OrderContext);

export const syncBothMenus = (userId, menuUpdated, setMenu) => {
  const cachette = doc(db, "users", userId);

  const nouritture = {
    username: userId,
    menu: menuUpdated,
  };

  setDoc(cachette, nouritture);
};

export const getMenu = async (userId, setMenu) => {
  const docRef = doc(db, "users", userId);

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    console.log("docSnapshot.data", docSnapshot.data);
    const { menu } = docSnapshot.data();
    return menu;
  } else {
    console.log("no spanshot");
    setMenu(fakeMenu.LARGE);
  }
};

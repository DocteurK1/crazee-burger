import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";
import { useContext } from "react";
import OrderContext from "../context/OrderContext";

export const useUserLogic = (userName) => {
  const { setMenu, menu } = useContext(OrderContext);

  const getUser = async (userName) => {
    const docRef = doc(db, "users", userName);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const userReceived = docSnapshot.data();
      const userMenu = userReceived.menu;
      console.log("L'user existe: ", userReceived);
      console.log("menu de l'utilisateur existant:", userMenu);
      setMenu(fakeMenu.SMALL);
      console.log("menu", menu);
    } else {
      console.log("l user n'existe pas, je créé l'user:", userName);
      createUser(userName);
    }
  };

  const createUser = (userName) => {
    const docRef = doc(db, "users", userName);
    const userData = {
      username: userName,
      menu: fakeMenu.SMALL,
    };

    setDoc(docRef, userData);
  };

  return { getUser, createUser };
};

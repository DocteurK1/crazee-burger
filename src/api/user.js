import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser);

  const docSnapshot = await getDoc(docRef);
  console.log("docSnapshot", docSnapshot);
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    console.log("userReceived", userReceived);
  }
};

export const createUser = (userId) => {
  // Chemin dans la db firebase : la db / le folder ou niveau "users" et ensuite le new user récupéré depuis userId
  const docRef = doc(db, "users", userId);
  console.log("userId", userId);

  // Ici j'aoute les données
  const userData = {
    username: userId,
    menu: fakeMenu.SMALL,
  };

  setDoc(docRef, userData);
};

// getUser("Alex");

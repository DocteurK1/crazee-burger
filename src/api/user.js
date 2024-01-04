import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser);

  const docSnapshot = await getDoc(docRef);
  console.log("docSnapshot", docSnapshot);
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    console.log("userReceived", userReceived);
  }
};

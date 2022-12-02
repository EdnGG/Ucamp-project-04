import { db } from "../firebase.js";
import {
  // getFirestore,
  collection,
  // getDocs,
  doc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

export const sendUserMessage = async (email, username, message) => {
  try {
    console.log("email, username, message: ", email, username, message);
    await setDoc(doc(db, "messages", email, username, message), {
      email,
      username,
      message,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (collectionName) => {
  try {
    await onSnapshot(collection(db, collectionName), (snapshot) => {
      // const data = {};
      snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// export const getUser = async (uid) => {
//   try {
//     const userDoc = await getDoc(doc(db, "users", uid));
//     return userDoc.data();
//   } catch (error) {
//     console.log(error);
//   }
// };

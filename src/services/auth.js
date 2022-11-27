import { auth } from "../firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const register = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

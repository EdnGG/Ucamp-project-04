import { auth } from "../firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const register = async (email, password) => {
  try {
    console.log("desde auth: ", email, password);
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    return await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

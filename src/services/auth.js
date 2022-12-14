import { auth } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import { useHistory } from "react-router-dom";

export const register = async (email, password) => {
  try {
    // console.log("desde auth: ", email, password);
    // llevar al usuario a la ruta inicial
    // let history = useHistory();
    // history.push("/");
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

import React from "react"; 
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken, { path: "/" });
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <br></br>
      <p>Sign In With Google To Continue</p>
      <br></br>
      <button onClick={signInWithGoogle}>Sign in With Google</button>
      
    </div>
  );
};


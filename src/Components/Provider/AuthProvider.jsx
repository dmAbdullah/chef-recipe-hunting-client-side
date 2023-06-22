import React, { Children, createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
const logOut = ()=> {
    return signOut(auth);
}

  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    })
    return()=> {
        unsubscribe();
    }
  }, []);

  const authInfo = {
    user,
    createUser,
    logIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

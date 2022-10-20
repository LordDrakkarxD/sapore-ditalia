import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  retrieveDocumentInformation,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  currentUserData: null,
  setCurrentUserData: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [userData, setUserData] = useState(null);

  const value = {
    currentUser,
    setCurrentUser,
    currentUserData,
    setCurrentUserData,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (!user) return;

      if (user) {
        createUserDocumentFromAuth(user);
      }

      const userData = await retrieveDocumentInformation(user);

      setCurrentUser(user);
      setCurrentUserData(userData);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
// Create Context
export const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
  //     if (authUser) {
  //       // Fetch additional user details from Firestore
  //       const userDoc = await getDoc(doc(db, "users", authUser.uid));
  //       if (userDoc.exists()) {
  //         setUser({
  //           uid: authUser.uid,
  //           email: authUser.email,
  //           ...userDoc.data(),
  //         });
  //       } else {
  //         setUser({ uid: authUser.uid, email: authUser.email });
  //       }
  //     } else {
  //       setUser(null);
  //     }
  //     setLoading(false);
  //   });

  //   return () => unsubscribe(); // Cleanup subscription on unmount
  // }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

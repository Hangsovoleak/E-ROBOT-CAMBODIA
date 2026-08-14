import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  signOut 
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, googleProvider, db } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sync user profile to Firestore
  const syncUserProfile = async (user, additionalData = {}) => {
    if (!user) return;
    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      const payload = {
        uid: user.uid,
        email: user.email || "",
        displayName: user.displayName || additionalData.displayName || "E-Robot Member",
        photoURL: user.photoURL || "",
        lastLogin: serverTimestamp(),
        ...additionalData
      };

      if (!userSnap.exists()) {
        payload.createdAt = serverTimestamp();
      }

      await setDoc(userRef, payload, { merge: true });
    } catch (err) {
      console.error("Error syncing user profile to Firestore:", err);
    }
  };

  // Google Sign-In
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await syncUserProfile(result.user);
      return result.user;
    } catch (error) {
      console.error("Google sign-in error:", error);
      throw error;
    }
  };

  // Email Sign-Up
  const signUpWithEmail = async (email, password, displayName) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) {
        await updateProfile(res.user, { displayName });
      }
      await syncUserProfile(res.user, { displayName });
      return res.user;
    } catch (error) {
      console.error("Email sign-up error:", error);
      throw error;
    }
  };

  // Email Sign-In
  const loginWithEmail = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      await syncUserProfile(res.user);
      return res.user;
    } catch (error) {
      console.error("Email login error:", error);
      throw error;
    }
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        await syncUserProfile(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    loginWithGoogle,
    signUpWithEmail,
    loginWithEmail,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

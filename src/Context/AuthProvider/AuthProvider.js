import React from 'react';
import { createContext } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext= createContext()
const auth =getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const googleSignIn=(Provider)=>{
    return signInWithPopup(auth,Provider)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      console.log(currentUser)
      setUser(currentUser)
    })
    return ()=>{
      unsubscribe()
    }
  })



  const authInfo = { user, googleSignIn }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
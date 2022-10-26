import React from 'react';
import { createContext } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext= createContext()
const auth =getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const googleSignIn=(provider)=>{
    return signInWithPopup(auth,provider)
  }

  const githubSignIn =(provider)=>{
    return signInWithPopup(auth, provider)
  }
  const logout = ()=> {
    return signOut(auth)
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



  const authInfo = { user, googleSignIn, githubSignIn, logout }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
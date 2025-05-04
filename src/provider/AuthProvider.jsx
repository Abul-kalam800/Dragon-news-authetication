import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebaseConfig';
export const AuthContex = createContext('');
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loding,setLoding]=useState(true)
    // console.log(loding, user)

    const creatUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth);
    }
  
    const logIn = (email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
     const updatedProfile = (updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
     }

    useEffect(() => {
        const unsubcrib = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoding(false)

        })
        return () => {
            unsubcrib();
        }
    }, [])


    const authValue = {
        creatUser,
        user,
        setUser,
        logOut,
        logIn,
        loding,
        setLoding,
        updatedProfile,
    }
    return (
        <AuthContex value={authValue}>
            {children}
        </AuthContex>
    );
};

export default AuthProvider;
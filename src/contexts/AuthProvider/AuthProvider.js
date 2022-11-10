import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import app from '../../firebase/firebase';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
        });

        return ()=>{
            unsubscribe();
        }
    } , [])
    


    const authInfo = {
        user,
        loading,
        googleLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
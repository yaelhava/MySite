import React, { useContext, useEffect, useState } from 'react'
import {auth} from "../firebase"

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    function login(email, password){
        
        
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    useEffect(() => {
        setLoading(false);
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])
    

    const value = {
        currentUser,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

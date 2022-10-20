import { createContext } from "react";

export const AuthContext = createContext({})

export const AuthProvider = (props) => {
    
    const user = {
        name: 'Igor'
    }
    
    return (
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>
    )
}
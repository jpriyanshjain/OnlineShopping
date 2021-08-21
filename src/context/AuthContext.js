import React,{createContext , useContext,useState } from "react";


const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider ({children}) {
    const [auth , setAuth] = useState({});
    const authValue = {auth , setAuth};
    return (
        <AuthContext.Provider value={authValue} >
            {children}
        </AuthContext.Provider>
    )
}
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from 'js-cookie'; 

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("medmate-user")) || null);

    useEffect(() => {
        if (authUser) {
            
            localStorage.setItem("medmate-user", JSON.stringify(authUser));

            Cookies.set('userId', authUser.userId, { expires: 7 }); 
            Cookies.set('userType', authUser.userType, { expires: 7 }); 
        } else {
            
            Cookies.remove('userId');
            Cookies.remove('userType');
        }
    }, [authUser]);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
}

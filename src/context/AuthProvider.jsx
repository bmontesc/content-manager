import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        // Intentar recuperar el access token de localStorage al cargar la app
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            setAuth((prev) => ({ ...prev, accessToken: storedToken }));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

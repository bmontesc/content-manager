import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true); // Añadir estado de carga

    useEffect(() => {
        // Intentar recuperar el access token y el email de localStorage al cargar la app
        const storedToken = localStorage.getItem('accessToken');
        const storedEmail = localStorage.getItem('email');
        if (storedToken && storedEmail) {
            setAuth((prev) => ({ ...prev, accessToken: storedToken, email: storedEmail }));
        }
        setLoading(false); // Finalizar la carga después de verificar el token
    }, []);

    // Mostrar indicador de carga mientras se verifica el token
    if (loading) {
        return <div>Cargando...</div>; // Puedes reemplazar esto con un componente de carga más elaborado
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
    isAuthenticaded: boolean;
    userRole: string | null;
    login: (role: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode}) => {
    const [isAuthenticaded, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState<string | null>(null);

    const login = (role: string) => {
        setIsAuthenticated(true);
        setUserRole(role);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserRole(null);
    };

    return(
        <AuthContext.Provider value={{ isAuthenticaded, userRole, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context
}
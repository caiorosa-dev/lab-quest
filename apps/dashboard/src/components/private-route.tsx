import React from "react";
import { useAuth } from "@/context/auth-context";
import { Navigate } from "@tanstack/react-router";

const PrivateRoute = ({ children}: { children: React.ReactNode}) => {
    const { isAuthenticaded, userRole } = useAuth();

    if(!isAuthenticaded || userRole !== 'Admin') {
        return <Navigate to="/login"/>;
    }
    return <>{ children }</>;
}

export default PrivateRoute;
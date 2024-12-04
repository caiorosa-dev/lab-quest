import React from "react";
import { useAuth } from "@/store/use-auth";
import { Navigate } from "@tanstack/react-router";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated, accessToken } = useAuth();
  
    if (!isAuthenticated || !accessToken) {
      return <Navigate to="/login" replace />;
    }
  
    //todo: Caso queira verificar a role no backend, pode implementar aqui
    return <>{children}</>;
  };
  
  export default PrivateRoute;
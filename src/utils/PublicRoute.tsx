import { useAuth } from "./AuthProvider"
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

const PublicRoute = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Navigate to="/" /> : children;
}

export default PublicRoute;
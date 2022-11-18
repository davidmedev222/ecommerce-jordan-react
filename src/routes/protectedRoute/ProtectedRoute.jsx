import { Navigate } from "react-router-dom"; // ROUTER DOM

const ProtectedRoute = ({ children }) => {
    const user = false;

    if (!user) {
        return <Navigate to="/login" />; // COMPONENT NAVIGATE
    }
    return children;
};

export { ProtectedRoute };

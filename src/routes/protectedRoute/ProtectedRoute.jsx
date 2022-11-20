import { Navigate } from "react-router-dom"; // ROUTER DOM
import { UserContext } from "../.././context/user/UserContext"; // CONTEXT
import { useContext } from "react"; // HOOKS

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext); // CONTEXT

    if (!user) {
        return <Navigate to="/login" />; // COMPONENT NAVIGATE
    }
    return children;
};

export { ProtectedRoute };

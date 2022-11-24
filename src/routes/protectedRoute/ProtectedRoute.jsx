import { UserContext } from "../.././context/user/UserContext"; // CONTEXT
import { Navigate } from "react-router-dom"; // ROUTER DOM
import { useContext } from "react"; // HOOKS

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext); // CONTEXT

    if (user === false) {
        return <h1 className="h1">loadingggg</h1>; // LOADING
    }

    if (user === null) {
        return <Navigate to="/login" />; // REDIRECT
    }
    return children;
};

export { ProtectedRoute };

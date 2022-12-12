import { UserContext } from '../../context/user/UserContext'; // CONTEXT
import { Navigate } from 'react-router-dom'; // ROUTER DOM
import { useContext } from 'react'; // HOOKS

const ProtectedRouteUser = ({ children }) => {
    const { user } = useContext(UserContext); // HELPERS

    if (user === false) {
        return <h1 className="h1">loadingggg</h1>; // LOADING
    }

    if (user) {
        return <Navigate to="/account" />; // REDIRECT
    }

    return children;
};

export { ProtectedRouteUser };

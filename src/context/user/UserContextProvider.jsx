import { UserContext } from "./UserContext"; // COMPONENT CONTEXT
import { createUserWithEmailAndPassword } from "firebase/auth"; // AUTH FIREBASE
import { auth } from "../../services/firebase/config"; // AUTH FIREBASE
import { useState } from "react"; // HOOKS

const UserContextProvider = ({ children }) => {
    const [user, updateUser] = useState(true); // STATE

    const [userModel, updateUserModel] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    }); // MODEL USER

    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const values = {
        user,
        updateUser,
        userModel,
        updateUserModel,
        createUser,
    };

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserContextProvider };

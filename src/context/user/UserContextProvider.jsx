import { UserContext } from "./UserContext"; // COMPONENT CONTEXT
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth"; // AUTH FIREBASE
import { auth } from "../../services/firebase/config"; // AUTH FIREBASE
import { useState, useEffect } from "react"; // HOOKS

const UserContextProvider = ({ children }) => {
    const [user, updateUser] = useState(false); // STATE

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log(user);
                updateUser(user);
            } else {
                updateUser(null);
                // console.log(user);
            }
        });
    }, []);

    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const signOutUser = () => signOut(auth);

    const updateProfileUser = () => {
        updateProfile(auth.currentUser);
    };

    const values = {
        user,
        updateUser,
        createUser,
        signInUser,
        signOutUser,
        updateProfileUser,
    };

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserContextProvider };

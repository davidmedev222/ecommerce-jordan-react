import { UserContext } from "../../context/user/UserContext"; // CONTEXT
import { Link, useNavigate } from "react-router-dom"; // ROUTER DOM & HOOK
import { useContext } from "react"; // HOOKS
import { toastifyNotication } from "../../components/toastify/Toastify"; // FUNCTION NOTIFICATION

const Register = () => {
    const navigate = useNavigate(); // NAVIGATE

    const { updateUser, userModel, updateUserModel, createUser } = useContext(UserContext); // HELPERS

    const handleOnChange = (ev) => {
        updateUserModel((prevUserModel) => {
            return {
                ...prevUserModel,
                [ev.target.name]: ev.target.value,
            };
        });
    }; // EVENT

    const handleFormSubmit = async (ev) => {
        try {
            ev.preventDefault();
            const userCredential = await createUser(userModel.email, userModel.password); // REQUEST AUTH
            updateUser({
                name: userCredential.user.displayName ?? userModel.name,
                phone: userCredential.user.phoneNumber ?? userModel.phone,
                email: userCredential.user.email,
                photo: userCredential.user.photoURL,
                orders: [],
            });
            navigate("/account"); // NAVIGATE
            toastifyNotication("account created"); // NOTIFICATION
        } catch (error) {
            toastifyNotication(error.code);
        }
    }; // EVENT

    return (
        <div className="register-container">
            {/* BUTTON CLOSE */}
            <button onClick={() => navigate("/login")} className="register-btn-close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
                </svg>
            </button>
            <section className="register">
                {/* TITLE */}
                <h1 className="register-h1">jordan shop</h1>
                {/* INFO */}
                <span className="register-span">Fill in the form with your data to create a new account.</span>
                {/* FORM */}
                <form onSubmit={handleFormSubmit} className="register-form">
                    <label htmlFor="name" className="register-label">
                        User Name
                        <input
                            value={userModel.name}
                            onChange={handleOnChange}
                            className="register-input"
                            type="text"
                            name="name"
                            required={true}
                            minLength={3}
                            maxLength={30}
                        />
                    </label>
                    <label htmlFor="phone" className="register-label">
                        Phone
                        <input
                            value={userModel.phone}
                            onChange={handleOnChange}
                            className="register-input"
                            type="tel"
                            name="phone"
                            required={true}
                            minLength={10}
                            maxLength={16}
                        />
                    </label>
                    <label htmlFor="email" className="register-label">
                        Email
                        <input
                            value={userModel.email}
                            onChange={handleOnChange}
                            className="register-input"
                            type="email"
                            name="email"
                            required={true}
                            minLength={5}
                            maxLength={50}
                        />
                    </label>
                    <label htmlFor="password" className="register-label">
                        Password
                        <input
                            value={userModel.password}
                            onChange={handleOnChange}
                            className="register-input"
                            type="password"
                            name="password"
                            required={true}
                            minLength={5}
                            maxLength={30}
                        />
                    </label>
                    {/* BUTTON */}
                    <button type="sumbit" className="btn register-btn">
                        CreateAccount
                    </button>
                </form>
                {/* DETAILS */}
                <p className="register-p">
                    By clicking on the button, you accept the{" "}
                    <Link to="#" className="register-a">
                        Terms of Use
                    </Link>{" "}
                    and the{" "}
                    <Link to="#" className="register-a">
                        Privacy Policy
                    </Link>{" "}
                    and also confirms that he is 18 years of age or older.
                </p>
            </section>
        </div>
    );
};

export { Register };

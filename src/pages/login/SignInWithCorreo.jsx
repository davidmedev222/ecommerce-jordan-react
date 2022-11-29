import { UserContext } from "../../context/user/UserContext"; // CONTEXT
import { useState, useContext } from "react"; // HOOKS
import { toastifyNotication } from "../.././components/toastify/Toastify"; // FUNCTION NOTIFICATION

const SignInWithCorreo = ({ updateOnContinue }) => {
    const [signInData, updateSignInData] = useState({
        email: "",
        password: "",
    }); // STATE

    const handleOnChange = (ev) => {
        updateSignInData((prevSignInData) => {
            return {
                ...prevSignInData,
                [ev.target.name]: ev.target.value,
            };
        });
    }; // EVENT

    const { signInUser } = useContext(UserContext); // HELPERS

    const handleFormSubmit = async (ev) => {
        try {
            ev.preventDefault();
            await signInUser(signInData.email, signInData.password); // REQUEST FIREBASE AUTH
            toastifyNotication("session started"); // NOTIFICATION
        } catch (error) {
            toastifyNotication(error.code); // NOTIFICATION
        }
    }; // EVENT

    return (
        <>
            <div className="signin-container">
                {/* BUTTON CLOSE */}
                <button onClick={() => updateOnContinue(false)} className="signin-btn-close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
                    </svg>
                </button>
                <section className="signin">
                    {/* TITLE */}
                    <h1 className="signin-h1">jordan shop</h1>
                    {/* INFO */}
                    <span className="signin-span">Complete the form to log in with your account.</span>
                    {/* FORM */}
                    <form onSubmit={handleFormSubmit} className="signin-form">
                        <label htmlFor="email" className="signin-label">
                            Email
                            <input
                                value={signInData.email}
                                onChange={handleOnChange}
                                className="signin-input"
                                type="email"
                                name="email"
                                id="email"
                                required={true}
                                minLength={3}
                                maxLength={50}
                                autoComplete="off"
                            />
                        </label>
                        <label htmlFor="password" className="signin-label">
                            Password
                            <input
                                value={signInData.password}
                                onChange={handleOnChange}
                                className="signin-input"
                                type="password"
                                name="password"
                                id="password"
                                required={true}
                                minLength={5}
                                maxLength={30}
                                autoComplete="off"
                            />
                        </label>
                        {/* BUTTON */}
                        <button type="sumbit" className="btn signin-btn">
                            Sign In
                        </button>
                    </form>
                </section>
            </div>
        </>
    );
};

export { SignInWithCorreo };

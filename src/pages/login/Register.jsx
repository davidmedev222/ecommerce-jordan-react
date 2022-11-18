import { Link, useNavigate } from "react-router-dom"; // ROUTER DOM & HOOK
import { Button } from "../.././components/button/Button"; // COMPONENT

const Register = () => {
    const navigate = useNavigate(); // NAVIGATE

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
                <form>
                    <label htmlFor="name" className="register-label">
                        User Name
                        <input className="register-input" type="text" name="name" />
                    </label>
                    <label htmlFor="email" className="register-label">
                        Email
                        <input className="register-input" type="email" name="email" />
                    </label>
                    <label htmlFor="password" className="register-label">
                        Password
                        <input className="register-input" type="password" name="password" />
                    </label>
                    <label htmlFor="confirm-password" className="register-label">
                        Confirm Password
                        <input className="register-input" type="password" name="confirm-password" />
                    </label>
                </form>
                {/* DETAILS */}
                <p className="register-p">
                    By clicking on the button, you accept the{" "}
                    <Link to="/tyc" className="register-a">
                        Terms of Use
                    </Link>{" "}
                    and the{" "}
                    <Link to="/pp" className="register-a">
                        Privacy Policy
                    </Link>{" "}
                    and also confirms that he is 18 years of age or older.
                </p>
                {/* COMPONENT BUTTON */}
                <Button className="register-btn">Create Account</Button>
            </section>
        </div>
    );
};

export { Register };

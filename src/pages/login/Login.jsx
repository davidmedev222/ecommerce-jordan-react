import { Link, useNavigate } from "react-router-dom"; // ROUTER DOM & HOOK

const Login = () => {
    const navigate = useNavigate(); // NAVIGATE

    return (
        <div className="login-background">
            {/* BUTTON CLOSE */}
            <button onClick={() => navigate("/shop")} className="login-btn-close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
                </svg>
            </button>
            <section className="login">
                {/* INFO */}
                <h1 className="login-h1">jordan shop</h1>
                <h2 className="login-h2">welcome to jordan shop</h2>
                <span className="login-span">Choose how you want to continue setting up your account</span>
                {/* BUTTONS SOCIALS */}
                <button className="login-btn login-btn-apple">Continue with Github</button>
                <button className="login-btn login-btn-facebook">Continue with Facebook</button>
                <button className="login-btn login-btn-google">Continue with Google</button>
                <button className="login-btn login-btn-correo">Continue with tu correo</button>
                {/* DETAILS */}
                <p className="login-p">
                    You do not have an account?{" "}
                    <Link to="/register" className="login-a">
                        Create new account
                    </Link>
                </p>
                <p className="login-p">
                    By clicking on the button, you accept the{" "}
                    <Link to="/tyc" className="login-a">
                        Terms of Use
                    </Link>{" "}
                    and the{" "}
                    <Link to="/pp" className="login-a">
                        Privacy Policy
                    </Link>{" "}
                    and also confirms that he is 18 years of age or older.
                </p>
            </section>
        </div>
    );
};

export { Login };

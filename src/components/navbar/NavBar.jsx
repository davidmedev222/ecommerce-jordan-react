import "./NavBar.scss"; // STYLES
import { CartWidget } from "./CartWidget"; // COMPONENT
import { Link } from "react-router-dom"; // ROUTER DOM

const NavBar = () => {
    return (
        <header className="header">
            {/* LOGO */}
            <Link to={"/"} className="header-logo">
                <h1 className="header-title">JORDAN</h1>
            </Link>
            {/* NAVBAR */}
            <nav className="nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        {/* LINK */}
                        <Link to={"/shop"} className="nav-a">
                            shop
                        </Link>
                    </li>
                    <li className="nav-li">
                        {/* LINK */}
                        {/* <Link to={"/item"} className="nav-a">
                            detail
                        </Link> */}
                    </li>
                    <li className="nav-li">
                        {/* LINK */}
                        <a href="#faq" className="nav-a">
                            faq
                        </a>
                    </li>
                </ul>
            </nav>
            {/* ICON CART */}
            <a href="#cart" className="header-cart">
                <span className="header-badge">0</span>
                {/* COMPONENT CARD WIDGET */}
                <CartWidget />
            </a>
        </header>
    );
};

export { NavBar };

import "./NavBar.scss";
import { CartWidget } from "./CartWidget";

const NavBar = () => {
    return (
        <header className="header">
            <a href="#home" className="header-logo">
                <h1 className="header-title">JORDAN</h1>
            </a>
            <nav className="nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <a href="#shop" className="nav-a">
                            shop
                        </a>
                    </li>
                    <li className="nav-li">
                        <a href="#category" className="nav-a">
                            category
                        </a>
                    </li>
                    <li className="nav-li">
                        <a href="#faq" className="nav-a">
                            faq
                        </a>
                    </li>
                </ul>
            </nav>
            <a href="#cart" className="header-cart">
                <span className="header-badge">0</span>
                <CartWidget />
            </a>
        </header>
    );
};

export { NavBar };

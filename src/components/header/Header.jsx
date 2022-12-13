import { NavLink } from 'react-router-dom'; // COMPONENT ROUTER DOM
import { CartWidget } from './CartWidget'; // COMPONENT

const Header = () => {
    return (
        <header className="header">
            {/* TITLE */}
            <h1 className="header-title">
                <NavLink end to="/" className={({ isActive }) => (isActive ? 'nav-a nav-a-active' : 'nav-a')}>
                    JORDAN STORE
                </NavLink>
            </h1>
            {/* NAVBAR */}
            <nav className="nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        {/* LINK */}
                        <NavLink to="/shop" className={({ isActive }) => (isActive ? 'nav-a nav-a-active' : 'nav-a')}>
                            shop
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        {/* LINK */}
                        <NavLink to="/faq" className={({ isActive }) => (isActive ? 'nav-a nav-a-active' : 'nav-a')}>
                            faq
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* ICONS */}
            <div className="header-icons">
                {/* ICON HOME */}
                <NavLink
                    to={'/'}
                    className={({ isActive }) => (isActive ? 'header-icon d-none header-icon-active' : 'header-icon d-none')}
                    end>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                </NavLink>
                {/* ICON SHOP */}
                <NavLink
                    to={'/shop'}
                    className={({ isActive }) =>
                        isActive ? 'header-icon d-none header-icon-active' : 'header-icon d-none'
                    }>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z" />
                    </svg>
                </NavLink>
                {/* ICON CART */}
                <NavLink
                    to={'/cart'}
                    className={({ isActive }) =>
                        isActive ? 'header-icon header-cart header-icon-active' : 'header-icon header-cart'
                    }>
                    {/* COMPONENT CARD WIDGET & BADGE*/}
                    <CartWidget />
                </NavLink>
                {/* ICON PROFILE */}
                <NavLink
                    to={'/account'}
                    className={({ isActive }) => (isActive ? 'header-icon header-icon-active' : 'header-icon')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0S112 64.5 112 144s64.5 144 144 144zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z" />
                    </svg>
                </NavLink>
            </div>
        </header>
    );
};

export { Header };

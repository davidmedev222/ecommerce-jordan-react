import { NavLink } from 'react-router-dom'; // ROUTER DOM

const ButtonFilter = ({ text, path }) => {
    return (
        <NavLink to={path} className={({ isActive }) => (isActive ? 'btn-filter btn-filter-active' : 'btn-filter')} end>
            {text}
        </NavLink>
    );
};

export { ButtonFilter };

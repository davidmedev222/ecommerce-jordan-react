import "./ButtonFilter.scss"; // STYLES
import { Link } from "react-router-dom"; // ROUTER DOM

const ButtonFilter = ({ text, path }) => {
    return (
        <Link to={path} className="btn-filter">
            {text}
        </Link>
    );
};

export { ButtonFilter };

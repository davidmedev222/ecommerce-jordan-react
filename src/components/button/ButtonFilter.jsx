import "./ButtonFilter.scss"; // STYLES
import { useNavigate } from "react-router-dom"; // HOOKS

const ButtonFilter = ({ text, path }) => {
    const navigate = useNavigate(); // NAVIGATE

    const handleNavigate = (to) => {
        navigate(to); // EVENT
    };

    return (
        <button onClick={() => handleNavigate(path)} className="btn-filter">
            {text}
        </button>
    );
};

export { ButtonFilter };

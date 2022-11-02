import "./Button.scss"; // STYLES

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="btn">
            {children}
        </button>
    );
};

export { Button };

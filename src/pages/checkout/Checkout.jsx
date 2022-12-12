import { CartContext } from '../../context/cart/CartContext'; // CONTEXT
import { BriefCheckout } from './BriefCheckout'; // COMPONENT
import { Navigate, useNavigate } from 'react-router-dom'; // HOOKS
import { useContext } from 'react'; // HOOKS

const Checkout = () => {
    const { order } = useContext(CartContext); // HELPERS
    const navigate = useNavigate(); // NAVIGATE

    if (!order) return <Navigate to="/cart" />; // REDIRECT

    return (
        <div className="order-container">
            {/* BUTTON CLOSE */}
            <button onClick={() => navigate('/cart')} className="order-btn-close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
                </svg>
            </button>
            {/* SECTION */}
            <section className="order">
                <BriefCheckout />
            </section>
        </div>
    );
};

export { Checkout };

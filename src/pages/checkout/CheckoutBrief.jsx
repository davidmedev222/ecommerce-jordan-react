import { CartContext } from '../../context/cart/CartContext'; // CONTEXT
import { H2 } from '../../components/heading/Heading'; // COMPONENT
import { ButtonLink } from '../.././components/button/ButtonLink'; // COMPONENT
import { useNavigate } from 'react-router-dom'; // HOOKS
import { useContext } from 'react'; // HOOKS
import { useOrder } from '../../hooks/firestore/useOrder'; // CUSTOM HOOK
import { toastifyNotication } from '../../components/toastify/Toastify'; // FUNCTION NOTIFICATION

const CheckoutBrief = () => {
    const navigate = useNavigate(); // NAVIGATE

    const { postOrder } = useOrder(); // CUSTOM HELPERS

    const { order, updateOrder, removeCart } = useContext(CartContext); // HELPERS

    const { buyer, total } = order; // DESTRUCTURING ORDER

    const handleConfirmOrder = async () => {
        try {
            await postOrder(); // REQUEST FIRESTORE
            removeCart(); // UPDATE CART
            updateOrder(null); // UPDATE ORDER
            toastifyNotication('Order generated'); // NOTIFICATION
        } catch (error) {
            toastifyNotication(error.code);
        }
    }; // EVENT

    return (
        <section className="checkout-brief">
            {/* BUTTON CLOSE */}
            <button onClick={() => navigate(-1)} className="checkout-brief-btn-close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
                </svg>
            </button>
            {/* COMPONENT */}
            <H2>Checkout</H2>
            {/* ORDER */}
            <div className="checkout-brief-order">
                <h3 className="checkout-brief-title">buyer data</h3>
                {/* BUYER */}
                <div className="checkout-brief-buyer">
                    <span className="checkout-brief-buyer-span">
                        Name <span>: {buyer.name}</span>
                    </span>
                    <span className="checkout-brief-buyer-span">
                        Email <span> : {buyer.email}</span>
                    </span>
                    {buyer.phone && (
                        <span className="checkout-brief-buyer-span">
                            Phone <span> : {buyer.phone}</span>
                        </span>
                    )}
                </div>
                <h3 className="checkout-brief-title">total</h3>
                {/* TOTAL */}
                <div className="checkout-brief-total">
                    <span className="checkout-brief-total-span">
                        Items <span>: {total.items}</span>
                    </span>
                    <span className="checkout-brief-total-span">
                        Price <span>: {total.price} usd</span>
                    </span>
                </div>
            </div>
            {/* COMPONENT */}
            <ButtonLink to="/account" onClick={handleConfirmOrder}>
                Confirm Order
            </ButtonLink>
            {/* INFO */}
            <span className="checkout-brief-span">Confirm your purchase order to continue.</span>
        </section>
    );
};

export { CheckoutBrief };

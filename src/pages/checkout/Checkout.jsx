import { CartContext } from "../../context/cart/CartContext"; // CONTEXT
import { useContext } from "react"; // HOOKS
import { useNavigate } from "react-router-dom"; // HOOKS
import { useOrder } from "../../hooks/firestore/useOrder"; // CUSTOM HOOK

const Checkout = () => {
    const navigate = useNavigate(); // NAVIGATE

    const { postOrder } = useOrder(); // HELPERS
    const { removeCart } = useContext(CartContext); // HELPERS

    const handleConfirmOrder = async () => {
        await postOrder(); // REQUEST FIRESTORE
        removeCart();
        navigate("/checkout/message");
    }; // EVENT

    return (
        <div className="order-container">
            {/* BUTTON CLOSE */}
            <button onClick={() => navigate("/cart")} className="order-btn-close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
                </svg>
            </button>
            <section className="order">
                {/* TITLE */}
                <h1 className="h1">checkout</h1>
                {/* INFO */}
                <span className="order-span">Confirm your purchase order to continue.</span>
                {/* ORDER */}
                <div className="order-details">
                    <h2 className="order-heading">buyer data</h2>
                    {/* BUYER */}
                    <div className="order-data">
                        <span className="order-data-sub">
                            Name <span className="order-data-span">: davidmedev</span>
                        </span>
                        <span className="order-data-sub">
                            Email <span className="order-data-span"> : davidcatrielamaman@gmail.com</span>
                        </span>
                        <span className="order-data-sub">
                            Phone <span className="order-data-span"> : 1168663837</span>
                        </span>
                    </div>
                    <h4 className="order-heading">total</h4>
                    {/* TOTAL */}
                    <div className="order-data">
                        <span className="order-data-sub">
                            Items <span className="order-data-span">: 14</span>
                        </span>
                        <span className="order-data-sub">
                            Price <span className="order-data-span">: 232usd</span>
                        </span>
                    </div>
                </div>
                <button onClick={handleConfirmOrder} className="btn order-btn">
                    Confirm Order
                </button>
                {/* DETAILS */}
                <p className="order-p">You can view your order in the order option of your account.</p>
            </section>
        </div>
    );
};

export { Checkout };

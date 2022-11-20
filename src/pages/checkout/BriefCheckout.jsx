import { CartContext } from "../../context/cart/CartContext"; // CONTEXT
import { useContext } from "react"; // HOOKS
import { useNavigate } from "react-router-dom"; // HOOKS
import { useOrder } from "../../hooks/firestore/useOrder"; // CUSTOM HOOK

const BriefCheckout = () => {
    const navigate = useNavigate(); // NAVIGATE

    const { postOrder } = useOrder(); // HELPERS
    const { removeCart, updateOnOrder } = useContext(CartContext); // HELPERS

    const handleConfirmOrder = async () => {
        await postOrder(); // REQUEST FIRESTORE
        removeCart(); // UPDATE CART
        updateOnOrder(true); // UPDATE STATE ORDER
        navigate("/checkout/message"); // NAVIGATE
    }; // EVENT

    return (
        <>
            {/* TITLE */}
            <h1 className="h1">checkout</h1>
            {/* INFO */}
            <span className="order-span">Confirm your purchase order to continue.</span>
            {/* ORDER */}
            <div className="order-details">
                <h2 className="order-heading">buyer data</h2>
                {/* BUYER */}
                <div className="order-data">
                    <span className="order-data-brief">
                        Name <span className="order-data-span">: davidmedev</span>
                    </span>
                    <span className="order-data-brief">
                        Email <span className="order-data-span"> : davidcatrielamaman@gmail.com</span>
                    </span>
                    <span className="order-data-brief">
                        Phone <span className="order-data-span"> : 1168663837</span>
                    </span>
                </div>
                <h4 className="order-heading">total</h4>
                {/* TOTAL */}
                <div className="order-data">
                    <span className="order-data-brief">
                        Items <span className="order-data-span">: 14</span>
                    </span>
                    <span className="order-data-brief">
                        Price <span className="order-data-span">: 232usd</span>
                    </span>
                </div>
            </div>
            <button onClick={handleConfirmOrder} className="btn order-btn">
                Confirm Order
            </button>
            {/* DETAILS */}
            <p className="order-p">You can view your order in the order option of your account.</p>
        </>
    );
};

export { BriefCheckout };

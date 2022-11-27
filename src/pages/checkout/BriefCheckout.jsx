import { CartContext } from "../../context/cart/CartContext"; // CONTEXT
import { useContext } from "react"; // HOOKS
import { useNavigate } from "react-router-dom"; // HOOKS
import { useOrder } from "../../hooks/firestore/useOrder"; // CUSTOM HOOK

const BriefCheckout = () => {
    const navigate = useNavigate(); // NAVIGATE

    const { order, removeCart, updateOnOrder } = useContext(CartContext); // HELPERS
    const { buyer, total } = order; // DESTRUCTURING ORDER

    const { postOrder } = useOrder(); // HELPERS

    const handleConfirmOrder = async () => {
        await postOrder(); // REQUEST FIRESTORE
        removeCart(); // UPDATE CART
        updateOnOrder(true); // UPDATE STATE ORDER
        navigate("/checkout/message"); // NAVIGATE
    }; // EVENT

    return (
        <>
            {/* TITLE */}
            <h2 className="h1">checkout</h2>
            {/* INFO */}
            <span className="order-span">Confirm your purchase order to continue.</span>
            {/* ORDER */}
            <div className="order-details">
                <h3 className="order-heading">buyer data</h3>
                {/* BUYER */}
                <div className="order-data">
                    <span className="order-data-brief">
                        Name <span className="order-data-span">: {buyer.name}</span>
                    </span>
                    <span className="order-data-brief">
                        Email <span className="order-data-span"> : {buyer.email}</span>
                    </span>
                    {buyer.phone && (
                        <span className="order-data-brief">
                            Phone <span className="order-data-span"> : {buyer.phone}</span>
                        </span>
                    )}
                </div>
                <h3 className="order-heading">total</h3>
                {/* TOTAL */}
                <div className="order-data">
                    <span className="order-data-brief">
                        Items <span className="order-data-span">: {total.items}</span>
                    </span>
                    <span className="order-data-brief">
                        Price <span className="order-data-span">: {total.price} usd</span>
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

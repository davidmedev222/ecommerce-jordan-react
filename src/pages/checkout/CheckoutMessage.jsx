import { CartContext } from "../../context/cart/CartContext"; // CONTEXT
import { Button } from "../../components/button/Button"; // COMPONENT
import { Navigate, useNavigate } from "react-router-dom"; // HOOKS
import { useContext } from "react"; // HOOKS
import { useEffect } from "react";

const CheckoutMessage = () => {
    const navigate = useNavigate(); // NAVIGATE

    const { updateOrder, onOrder, orderUid } = useContext(CartContext); // HELPERS

    const handleNavigate = () => {
        navigate("/account");
    }; // EVENT

    useEffect(() => {
        updateOrder(undefined); // UPDATE ORDER
    }, [updateOrder]);

    if (!onOrder) return <Navigate to="/checkout" />; // REDIRECT

    return (
        <>
            <section className="checkout">
                {/* TITLE */}
                <h1 className="h1">order generated</h1>
                <h2 className="checkout-order">{orderUid}</h2>
                {/* ICON */}
                <svg className="checkout-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                {/* COMPONENT BUTTON */}
                <Button onClick={handleNavigate}>go to account</Button>
            </section>
        </>
    );
};
export { CheckoutMessage };

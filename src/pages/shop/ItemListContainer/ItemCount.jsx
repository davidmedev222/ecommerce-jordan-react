import { Button } from "../../../components/button/Button"; // COMPONENT
import { useState } from "react"; // HOOKS
import "./ItemCount.scss"; // STYLES

const ItemCount = ({ stock, initial, text }) => {
    const [quantity, updateQuantity] = useState(initial); // STATE

    const handleIncrease = () => {
        quantity < stock && updateQuantity((q) => q + 1);
    }; // EVENT
    const handleDecrease = () => {
        quantity > initial && updateQuantity((q) => q - 1);
    }; // EVENT

    return (
        <div className="count">
            {/* BUTTON DECREASE */}
            <button onClick={handleDecrease} className="count-btn count-decrease">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
            {/* QUANTITY */}
            <span className="count-quantity">{quantity}</span>
            {/* BUTTON INCREASE */}
            <button onClick={handleIncrease} className="count-btn count-increase">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
            </button>
            {/* BUTTON ADD */}
            <Button text={text} />
        </div>
    );
};

export { ItemCount };

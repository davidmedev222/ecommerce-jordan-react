import { CartContext } from '../../.././context/cart/CartContext'; // CONTEXT
import { useContext } from 'react'; // HOOKS

const ItemCount = ({ itemCp, itemQuantity, itemStock }) => {
    const { decreaseItem, increaseItem, deleteItem } = useContext(CartContext); // HELPERS

    const handleDecrease = () => itemQuantity > 1 && decreaseItem(itemCp); // EVENT

    const handleIncrease = () => itemQuantity < itemStock && increaseItem(itemCp); // EVENT

    const handleDelete = () => deleteItem(itemCp);

    return (
        <div className="cart-count">
            {/* DECREASE */}
            <button onClick={handleDecrease} className="cart-count-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
            {/* QUANTITY */}
            <span className="cart-count-quantity">{itemQuantity}</span>
            {/* INCREASE */}
            <button onClick={handleIncrease} className="cart-count-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
            </button>
            {/* DELETE */}
            <button onClick={handleDelete} className="cart-count-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
            </button>
        </div>
    );
};

export { ItemCount };

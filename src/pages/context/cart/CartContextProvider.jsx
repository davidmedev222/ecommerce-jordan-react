import { CartContext } from "./CartContext"; // COMPONENT
import { useState } from "react"; // HOOKS

const CartContextProvider = ({ children }) => {
    const [cart, updateCart] = useState([]); // STATE

    const addItem = (item, quantity) => {
        updateCart([...cart, { ...item, quantity: quantity }]);
    };

    const isInCart = (id) => {
        return cart.some((cadaItem) => cadaItem.id === id);
    };

    const deleteItem = (id) => {
        updateCart(cart.filter((cadaItem) => cadaItem.id !== id));
    };

    const removeCart = () => {
        updateCart([]);
    };

    const values = { cart, updateCart, addItem, isInCart, deleteItem, removeCart };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export { CartContextProvider };

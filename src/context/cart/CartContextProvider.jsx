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

    const quantityItems = () => {
        return cart.reduce((acumulador, cadaItem) => acumulador + cadaItem.quantity, 0);
    };

    const totalPrice = () => {
        return cart.reduce((acumulador, cadaItem) => acumulador + cadaItem.price * cadaItem.quantity, 0);
    };

    const values = { cart, updateCart, addItem, isInCart, deleteItem, removeCart, quantityItems, totalPrice };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export { CartContextProvider };

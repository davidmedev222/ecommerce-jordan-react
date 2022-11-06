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

    const decreaseItem = (id) => {
        updateCart(
            cart.map((cadaItem, index) => {
                if (cadaItem.id === id) return { ...cadaItem, quantity: cart[index].quantity - 1 };
                return cadaItem;
            })
        );
    };

    const increaseItem = (id) => {
        updateCart(
            cart.map((cadaItem, index) => {
                if (cadaItem.id === id) return { ...cadaItem, quantity: cart[index].quantity + 1 };
                return cadaItem;
            })
        );
    };

    const deleteItem = (id) => {
        updateCart(cart.filter((cadaItem) => cadaItem.id !== id));
    };

    const removeCart = () => {
        updateCart([]);
    };

    const totalQuantityItems = () => {
        return cart.reduce((acumulador, cadaItem) => acumulador + cadaItem.quantity, 0);
    };

    const totalPrice = () => {
        return cart.reduce((acumulador, cadaItem) => acumulador + cadaItem.price * cadaItem.quantity, 0);
    };

    const values = {
        cart,
        updateCart,
        addItem,
        isInCart,
        decreaseItem,
        increaseItem,
        deleteItem,
        removeCart,
        totalQuantityItems,
        totalPrice,
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export { CartContextProvider };

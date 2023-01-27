import { CartContext } from './CartContext'; // COMPONENT CONTEXT
import { useState } from 'react'; // HOOKS

const CartContextProvider = ({ children }) => {
    const [cart, updateCart] = useState([]); // STATE

    const addItem = (item, quantity) => {
        updateCart((prevCart) => [...prevCart, { ...item, quantity: quantity }]);
    };

    const isInCart = (codeProduct) => {
        return cart.some((cadaItem) => cadaItem.cp === codeProduct);
    };

    const decreaseItem = (codeProduct) => {
        updateCart((prevCart) =>
            prevCart.map((cadaItem, index) => {
                if (cadaItem.cp === codeProduct) return { ...cadaItem, quantity: cart[index].quantity - 1 };
                return cadaItem;
            })
        );
    };

    const increaseItem = (codeProduct) => {
        updateCart((prevCart) =>
            prevCart.map((cadaItem, index) => {
                if (cadaItem.cp === codeProduct) return { ...cadaItem, quantity: cart[index].quantity + 1 };
                return cadaItem;
            })
        );
    };

    const deleteItem = (codeProduct) => {
        updateCart((prevCart) => prevCart.filter((cadaItem) => cadaItem.cp !== codeProduct));
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

    const [order, updateOrder] = useState(null); // STATE

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
        order,
        updateOrder,
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export { CartContextProvider };

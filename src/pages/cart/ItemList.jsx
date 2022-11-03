import { CartContext } from "../.././context/cart/CartContext"; // CONTEXT
import { Item } from "./Item"; // COMPONENT
import { Button } from "../.././components/button/Button"; // COMPONENT
import { useContext } from "react"; // HOOKS

const ItemList = () => {
    const { cart, quantityItems, totalPrice } = useContext(CartContext); // HELPERS

    const items = cart.map((cadaItem) => <Item key={cadaItem.id} {...cadaItem} />);

    return (
        <div className="cart-content">
            {/* COMPONENT ITEM */}
            {items}
            <div className="cart-options">
                <div className="cart-discount">
                    <input className="cart-cupon" type="text" name="cupon" id="cupon" placeholder="promo code" />
                    <Button className="cart-apply">apply</Button>
                </div>
                <article className="cart-details">
                    <h2 className="cart-total">total</h2>
                    <span className="cart-description">({quantityItems()}) products</span>
                    <span className="cart-price">{totalPrice()} USD</span>
                </article>
                <Button>checkout</Button>
            </div>
        </div>
    );
};

export { ItemList };

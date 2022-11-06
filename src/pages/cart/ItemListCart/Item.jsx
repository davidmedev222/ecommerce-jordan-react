import { ItemCount } from "./ItemCount"; // COMPONENT

const Item = ({ id, image, name, color, price, quantity, stock }) => {
    return (
        <div className="cart-item">
            {/* IMAGE */}
            <picture className="cart-picture">
                <img src={image} alt={name} />
            </picture>
            {/* NAME & COLOR & PRICE */}
            <article className="cart-art">
                <h2 className="cart-name">{name}</h2>
                <span className="cart-color">{color}</span>
                <span className="cart-price">{price} usd</span>
            </article>
            {/* ITEM COUNT */}
            <ItemCount itemId={id} itemQuantity={quantity} itemStock={stock} />
        </div>
    );
};

export { Item };

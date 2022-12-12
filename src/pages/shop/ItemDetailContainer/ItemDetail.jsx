import { CartContext } from '../../../context/cart/CartContext'; // CONTEXT
import { ItemCount } from '../ItemListContainer/ItemCount'; // COMPONENT
import { Button } from '../../../components/button/Button'; // COMPONENT
import { useNavigate } from 'react-router-dom'; // HOOKS
import { useState, useContext } from 'react'; // HOOKS

const ItemDetail = ({ cp, imageOne, imageTwo, name, collection, color, price, stock, designer, location, launch }) => {
    const navigate = useNavigate(); // NAVIGATE

    const handleNavigate = () => {
        navigate(-1);
    }; // EVENT

    const [onAdd, updateOnAdd] = useState(false); // STATE

    const { isInCart } = useContext(CartContext); // HELPER

    const modelItem = {
        cp: cp,
        image: imageOne,
        name: name,
        color: color,
        price: price,
        stock: stock,
        quantity: 1,
    }; // MODEL ITEM

    return (
        <div className="card-detail">
            {/* IMAGES */}
            <picture className="card-detail-picture" data-fade>
                <img className="card-detail-image" src={imageOne} alt={name} />
                <img className="card-detail-image card-detail-image-two " src={imageTwo} alt={name} />
            </picture>
            {/* BUTTON */}
            <button onClick={handleNavigate} className="card-detail-close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
                </svg>
            </button>
            {/* INFO */}
            <article className="card-detail-info">
                {/* COLLECCTION */}
                <span data-fade data-delay="300" className="card-detail-collection">
                    {collection}
                </span>
                {/* NAME */}
                <h4 data-fade data-delay="500" className="card-detail-name">
                    {name}
                </h4>
                {/* COLOR */}
                <span data-fade data-delay="700" className="card-detail-color">
                    {color}
                </span>
                {/* PRICE */}
                <h5 data-fade data-delay="900" className="card-detail-price">
                    {price} USD
                </h5>
                {/* STOCK */}
                <span data-fade data-delay="700" className="card-detail-stock">
                    {stock} available units
                </span>
                {/* COMPONENT BUTTON OR ITEM COUNT */}
                {onAdd || isInCart(cp) ? (
                    <Button onClick={() => navigate('/cart')}>checkout</Button>
                ) : (
                    <ItemCount item={modelItem} onAdd={updateOnAdd} stock={stock} initial={1} />
                )}
                <footer className="card-detail-footer">
                    {/* DESIGNER */}
                    <span data-fade data-delay="1100" className="card-detail-designer">
                        {designer}
                    </span>
                    {/* LOCATION */}
                    <span data-fade data-delay="1300" className="card-detail-location">
                        {location}
                    </span>
                    {/* LAUNCH */}
                    <span data-fade data-delay="1500" className="card-detail-launch">
                        {launch}
                    </span>
                </footer>
            </article>
        </div>
    );
};

export { ItemDetail };

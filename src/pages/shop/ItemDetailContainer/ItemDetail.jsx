import "./ItemDetail.scss"; // STYLES
import { ItemCount } from "../ItemListContainer/ItemCount"; // COMPONENT
import { useNavigate } from "react-router-dom"; // HOOKS

const ItemDetail = ({ imageOne, imageTwo, name, collection, color, price, stock, designer, location, launch }) => {
    const navigate = useNavigate(); // NAVIGATE

    const handleNavigate = () => {
        navigate("/shop"); // EVENT
    };

    return (
        <div className="card-detail">
            {/* BUTTON */}
            <button onClick={handleNavigate} className="card-detail-close">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
            </button>
            {/* IMAGES */}
            <picture className="card-detail-picture" data-fade>
                <img className="card-detail-image" src={imageOne} alt={name} />
                <img className="card-detail-image card-detail-image-two " src={imageTwo} alt={name} />
            </picture>
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
                {/* COMPONENT ITEM COUNT */}
                <ItemCount stock={stock} initial={1} text="add to cart" />
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

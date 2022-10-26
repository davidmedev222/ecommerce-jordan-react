import "./Item.scss"; // STYLES
import { Link } from "react-router-dom"; // ROUTER DOM

const Item = ({ id, price, imageOne, name }) => {
    return (
        <article className="card">
            {/* <!-- PICTURE --> */}
            <picture className="card-picture">
                {/* <!-- PRICE--> */}
                <span className="card-price">${price}</span>
                {/* <!-- IMAGE --> */}
                <img src={imageOne} className="card-img" alt={name} />
            </picture>
            {/* <!-- NAME --> */}
            <h4 className="card-name">{name}</h4>
            {/* <!-- BUTTON --> */}
            <Link to={`/shop/item/${id}`} className="card-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                </svg>
            </Link>
        </article>
    );
};

export { Item };

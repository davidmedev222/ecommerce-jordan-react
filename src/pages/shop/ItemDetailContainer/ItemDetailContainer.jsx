import { fetchJordan } from "../../.././services/jordanAPI"; // API
import { ItemDetail } from "./ItemDetail"; // COMPONENT
import { useState, useEffect } from "react"; // HOOKS
import "./ItemDetailContainer.scss"; // STYLES

const ItemDetailContainer = () => {
    const [products, updateProducts] = useState([]); // STATE
    const product = products.filter((product) => product.id === "30"); // PRODUCT FILTERED

    useEffect(() => {
        fetchJordan().then((response) => updateProducts(response)); // API RESULTS
    }, []);

    return (
        <div className="shop-detail">
            {/* COMPONENT ITEM DETAIL */}
            {product.map((product) => (
                <ItemDetail key={product.id} {...product} />
            ))}
        </div>
    );
};

export { ItemDetailContainer };

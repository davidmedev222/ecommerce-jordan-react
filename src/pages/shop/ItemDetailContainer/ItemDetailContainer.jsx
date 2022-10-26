import { fetchJordan } from "../../.././services/jordanAPI"; // API
import { ItemDetail } from "./ItemDetail"; // COMPONENT
import { useState, useEffect } from "react"; // HOOKS
import { useParams } from "react-router-dom"; // HOOKS

const ItemDetailContainer = () => {
    const { id } = useParams(); // PARAM ROUTE
    const [products, updateProducts] = useState([]); // STATE

    const product = products // PRODUCT FILTERED
        .filter((product) => product.id === id)
        .map((product) => <ItemDetail key={product.id} {...product} />); // COMPONENT ITEM DETAIL FILTERED

    useEffect(() => {
        fetchJordan().then((response) => updateProducts(response)); // API RESULTS
    }, []);

    return (
        <div className="shop-detail">
            <h1 className="h1">{id}</h1>
            {product.length > 0 ? product : <h1 className="h1">CARGANDO</h1>}
        </div>
    );
};

export { ItemDetailContainer };

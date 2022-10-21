import { fetchJordan } from "../../../services/jordanAPI"; // API
import { ItemCount } from "./ItemCount"; // COMPONENT
import { ItemList } from "./ItemList"; // COMPONENT
import { useEffect, useState } from "react"; // HOOKS

const ItemListContainer = ({ greeting }) => {
    const [products, updateProducts] = useState([]); // STATE

    useEffect(() => {
        fetchJordan().then((response) => updateProducts(response)); // API RESULTS
    }, []);

    return (
        <section className="section">
            {/* TITLE */}
            <h2 className="h1">{greeting}</h2>
            {/* COMPONENT ITEM COUNT */}
            <ItemCount stock={5} initial={1} />
            {/* COMPONENT ITEM LIST */}
            <ItemList items={products} />
        </section>
    );
};

export { ItemListContainer };

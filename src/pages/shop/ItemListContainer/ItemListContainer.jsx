import "./ItemListContainer.scss"; // STYLES
import { fetchJordan } from "../../../services/jordanAPI"; // API
import { ItemList } from "./ItemList"; // COMPONENT
import { ButtonFilter } from "../../.././components/button/ButtonFilter"; // COMPONENT
import { useEffect, useState } from "react"; // HOOKS

const ItemListContainer = () => {
    const [products, updateProducts] = useState([]); // STATE

    useEffect(() => {
        fetchJordan().then((response) => updateProducts(response)); // API RESULTS
    }, []);

    return (
        <section className="section">
            {/* TITLE */}
            <h2 className="h1">shop</h2>
            {/* BTN GROUP */}
            <div className="btn-group">
                <ButtonFilter path={"/shop"} text={"ALL"} /> {/* COMPONENT BUTTON FILTER */}
                <ButtonFilter path={"/shop/category/2017"} text={2017} /> {/* COMPONENT BUTTON FILTER */}
                <ButtonFilter path={"/shop/category/2018"} text={2018} /> {/* COMPONENT BUTTON FILTER */}
                <ButtonFilter path={"/shop/category/2019"} text={2019} /> {/* COMPONENT BUTTON FILTER */}
                <ButtonFilter path={"/shop/category/2020"} text={2020} /> {/* COMPONENT BUTTON FILTER */}
            </div>
            {/* COMPONENT ITEM LIST */}
            <ItemList items={products} />
        </section>
    );
};

export { ItemListContainer };

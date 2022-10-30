import "./ItemListContainer.scss"; // STYLES
import { fetchJordan } from "../../../services/jordanAPI"; // API
import { NavBar } from "../../../components/navbar/NavBar"; // COMPONENT
import { ItemList } from "./ItemList"; // COMPONENT
import { ButtonFilter } from "../../.././components/button/ButtonFilter"; // COMPONENT
import { useEffect, useState } from "react"; // HOOKS

const ItemListContainer = () => {
    const [products, updateProducts] = useState([]); // STATE

    useEffect(() => {
        setTimeout(() => {
            fetchJordan().then((response) => updateProducts(response)); // API RESULTS
        }, 1300);
    }, []);

    return (
        <>
            <NavBar /> {/* COMPONENT NAVBAR */}
            <section className="section">
                {/* TITLE */}
                <h2 className="h1">shop</h2>
                {/* BTN GROUP */}
                <div className="btn-group">
                    <ButtonFilter path={"/shop"} text={"ALL"} /> {/* COMPONENT BUTTON FILTER */}
                    <ButtonFilter path={"/shop/category/2019"} text={2019} /> {/* COMPONENT BUTTON FILTER */}
                    <ButtonFilter path={"/shop/category/2020"} text={2020} /> {/* COMPONENT BUTTON FILTER */}
                    <ButtonFilter path={"/shop/category/2021"} text={2021} /> {/* COMPONENT BUTTON FILTER */}
                    <ButtonFilter path={"/shop/category/2022"} text={2022} /> {/* COMPONENT BUTTON FILTER */}
                </div>
                <ItemList items={products} /> {/* COMPONENT ITEM LIST */}
            </section>
        </>
    );
};

export { ItemListContainer };

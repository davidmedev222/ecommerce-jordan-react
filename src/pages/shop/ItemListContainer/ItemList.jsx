import "./ItemList.scss"; // STYLES
import { Item } from "./Item"; // COMPONENT
import { useParams } from "react-router-dom"; // HOOKS

const ItemList = ({ items }) => {
    const { category } = useParams(); // PARAM ROUTE

    // COMPONENT ITEM FILTERED BY PARAM ROUTE OR ITEM
    const component = (paramRoute, products) => {
        if (paramRoute) {
            return products
                .filter((cadaJordan) => cadaJordan.year === category)
                .map((cadaJordan) => <Item key={cadaJordan.id} {...cadaJordan} />);
        } else {
            return products.map((cadaJordan) => <Item key={cadaJordan.id} {...cadaJordan} />);
        }
    };
    const products = component(category, items); // RESULT COMPONENT ITEM

    return (
        <div className="shop-content">
            {/* COMPONENT ITEM */}
            {products}
        </div>
    );
};

export { ItemList };

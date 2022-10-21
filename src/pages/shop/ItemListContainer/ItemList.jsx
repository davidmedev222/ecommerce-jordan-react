import { Item } from "./Item"; // COMPONENT
import "./ItemList.scss"; // STYLES

const ItemList = ({ items }) => {
    return (
        <div className="shop-content">
            {/* COMPONENT ITEM */}
            {items.map((cadaJordan) => (
                <Item key={cadaJordan.id} {...cadaJordan} />
            ))}
        </div>
    );
};

export { ItemList };

import { NavBar } from "./components/nav/NavBar"; // COMPONENT
import { ItemDetailContainer } from "./pages/shop/ItemDetailContainer/ItemDetailContainer"; // COMPONENT
import { ItemListContainer } from "./pages/shop/ItemListContainer/ItemListContainer"; // COMPONENT
import "./styles/reset.scss"; // STYLES
import "./styles/utilities.scss"; // STYLES

const App = () => {
    return (
        <>
            {/* HEADER */}
            <NavBar />
            {/* MAIN - SHOP-DETAIL */}
            <ItemDetailContainer />
            {/* MAIN - SHOP */}
            <ItemListContainer greeting="JORDAN SHOP" />
        </>
    );
};

export { App };

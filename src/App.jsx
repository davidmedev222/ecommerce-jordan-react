import "./styles/reset.scss"; // STYLES
import "./styles/utilities.scss"; // STYLES
import { NavBar } from "./components/nav/NavBar"; // COMPONENT
import { ItemListContainer } from "./pages/shop/ItemListContainer/ItemListContainer"; // COMPONENT

const App = () => {
    return (
        <>
            {/* HEADER */}
            <NavBar />
            {/* MAIN - CATEGORY */}
            <ItemListContainer greeting="JORDAN SHOP" />
        </>
    );
};

export { App };

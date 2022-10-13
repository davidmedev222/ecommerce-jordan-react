import "./style/reset.scss";
import "./style/utilities.scss";
import { NavBar } from "./components/nav/NavBar";
import { ItemListContainer } from "./pages/category/ItemListContainer";

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="JORDAN SHOP" />
        </>
    );
};

export { App };

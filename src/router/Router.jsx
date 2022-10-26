import ".././styles/reset.scss"; // STYLES
import ".././styles/utilities.scss"; // STYLES
import { NavBar } from "../components/navbar/NavBar"; // COMPONENT
import { Home } from "../pages/home/Home"; // COMPONENT
import { Error } from "../pages/error/Error"; // COMPONENT
import { ItemDetailContainer } from "../pages/shop/ItemDetailContainer/ItemDetailContainer"; // COMPONENT
import { ItemListContainer } from "../pages/shop/ItemListContainer/ItemListContainer"; // COMPONENT
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ROUTER DOM

const App = () => {
    return (
        <BrowserRouter>
            <NavBar /> {/* NAVBAR */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* HOME */}
                <Route path="/*" element={<Error />} /> {/* ERROR 404 */}
                <Route path="/shop" element={<ItemListContainer />} /> {/* ITEM LIST CONTAINER */}
                <Route path="/shop/item/:id" element={<ItemDetailContainer />} /> {/* ITEM DETAIL CONTAINER */}
                <Route path="/shop/category/:category" element={<ItemListContainer />} /> {/* ITEM LIST CONTAINER */}
            </Routes>
        </BrowserRouter>
    );
};

export { App };

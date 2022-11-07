import ".././styles/App.scss"; // STYLES
import { CartContextProvider } from "../context/cart/CartContextProvider"; // CONTEXT
import { Home } from "../pages/home/Home"; // COMPONENT
import { Error } from "../pages/error/Error"; // COMPONENT
import { ItemDetailContainer } from "../pages/shop/ItemDetailContainer/ItemDetailContainer"; // COMPONENT
import { ItemListContainer } from "../pages/shop/ItemListContainer/ItemListContainer"; // COMPONENT
import { ItemListCart } from "../pages/cart/ItemListCart/ItemListCart"; // COMPONENT
import { Account } from "../pages/account/Account"; // COMPONENT
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ROUTER DOM

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* HOME */}
                    <Route path="/*" element={<Error />} /> {/* ERROR 404 */}
                    <Route path="/shop" element={<ItemListContainer />} /> {/* ITEM LIST CONTAINER */}
                    <Route path="/shop/category/:category" element={<ItemListContainer />} /> {/* ITEM LIST CONTAINER */}
                    <Route path="/shop/item/:id" element={<ItemDetailContainer />} /> {/* ITEM DETAIL CONTAINER */}
                    <Route path="/cart" element={<ItemListCart />} /> {/* CART */}
                    <Route path="/account" element={<Account />} /> {/* ACCOUNT */}
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
};

export { App };

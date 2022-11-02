import ".././styles/reset.scss"; // STYLES
import ".././styles/utilities.scss"; // STYLES
import { CartContextProvider } from "../pages/context/cart/CartContextProvider"; // CONTEXT
import { Home } from "../pages/home/Home"; // COMPONENT
import { Error } from "../pages/error/Error"; // COMPONENT
import { ItemDetailContainer } from "../pages/shop/ItemDetailContainer/ItemDetailContainer"; // COMPONENT
import { ItemListContainer } from "../pages/shop/ItemListContainer/ItemListContainer"; // COMPONENT
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ROUTER DOM
import { Account } from "../pages/account/Account"; // COMPONENT

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
                    <Route path="/cart" element={<Home />} /> {/* CART */}
                    <Route path="/account" element={<Account />} /> {/* ACCOUNT */}
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
};

export { App };

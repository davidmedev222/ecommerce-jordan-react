import '.././styles/App.scss'; // STYLES
import { UserContextProvider } from '../context/user/UserContextProvider'; // CONTEXT
import { CartContextProvider } from '../context/cart/CartContextProvider'; // CONTEXT
import { Home } from '../pages/home/Home'; // COMPONENT
import { Error } from '../pages/error/Error'; // COMPONENT
import { ItemDetailContainer } from '../pages/shop/ItemDetailContainer/ItemDetailContainer'; // COMPONENT
import { ItemListContainer } from '../pages/shop/ItemListContainer/ItemListContainer'; // COMPONENT
import { ItemListCart } from '../pages/cart/ItemListCart/ItemListCart'; // COMPONENT
import { ProtectedRoute } from './protectedRoute/ProtectedRoute'; // COMPONENT
import { ProtectedRouteUser } from './protectedRouteUser/ProtectedRouteUser'; // COMPONENT
import { Account } from '../pages/account/Account'; // COMPONENT
import { Login } from '../pages/login/Login'; // COMPONENT
import { Register } from '../pages/login/Register'; // COMPONENT
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ROUTER DOM
import { Checkout } from '../pages/checkout/Checkout'; // COMPONENT
import { CheckoutMessage } from '../pages/checkout/CheckoutMessage'; // COMPONENT

const App = () => {
    return (
        <UserContextProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} /> {/* HOME */}
                        <Route path="/*" element={<Error />} /> {/* ERROR 404 */}
                        <Route path="/shop" element={<ItemListContainer />} /> {/* ITEM LIST CONTAINER */}
                        <Route path="/shop/category/:category" element={<ItemListContainer />} /> {/* ITEM LIST CONTAINER */}
                        <Route path="/shop/item/:id" element={<ItemDetailContainer />} /> {/* ITEM DETAIL CONTAINER */}
                        <Route path="/cart" element={<ItemListCart />} /> {/* CART */}
                        <Route
                            path="/account"
                            element={
                                <ProtectedRoute>
                                    <Account /> {/* ACCOUNT */}
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <ProtectedRouteUser>
                                    <Login /> {/* LOGGIN */}
                                </ProtectedRouteUser>
                            }></Route>
                        <Route
                            path="/register"
                            element={
                                <ProtectedRouteUser>
                                    <Register /> {/* REGISTER */}
                                </ProtectedRouteUser>
                            }></Route>
                        <Route
                            path="/checkout"
                            element={
                                <ProtectedRoute>
                                    <Checkout /> {/* CHECKOUT */}
                                </ProtectedRoute>
                            }></Route>
                        <Route
                            path="/checkout/message"
                            element={
                                <ProtectedRoute>
                                    <CheckoutMessage /> {/* CHECKOUT MESSAGE */}
                                </ProtectedRoute>
                            }></Route>
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </UserContextProvider>
    );
};

export { App };

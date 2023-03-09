import '.././styles/App.scss' // STYLES
import { UserContextProvider, CartContextProvider } from '../context/export' // CUSTOM CONTEXTS
import { BrowserRouter, Routes, Route } from 'react-router-dom' // ROUTER DOM
import { Layout } from '../pages/layout/Layout' // COMPONENTE
import { Home } from '../pages/home/Home' // COMPONENT
import { Error } from '../pages/error/Error' // COMPONENT
import { Account } from '../pages/account/Account' // COMPONENT
import { Checkout } from '../pages/checkout/Checkout' // COMPONENT
import { ItemListCart } from '../pages/cart/ItemListCart/ItemListCart' // COMPONENT
import { ItemDetailContainer, ItemListContainer } from '../pages/shop/export' // COMPONENTS
import { ProtectedRoute, ProtectedRouteUser } from './export' // COMPONENTS
import { Login, Register } from '../pages/login/export' // COMPONENTS

const App = () => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='*' element={<Error />} />
              <Route path='shop' element={<ItemListContainer />} />
              <Route path='shop/category/:category' element={<ItemListContainer />} />
              <Route path='shop/item/:id' element={<ItemDetailContainer />} />
              <Route path='faq' element={<h2>FAq</h2>} />
              <Route path='cart' element={<ItemListCart />} />
              <Route element={<ProtectedRoute />}>
                <Route path='account' element={<Account />} />
                <Route path='checkout' element={<Checkout />} />
              </Route>
              <Route element={<ProtectedRouteUser />}>
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </UserContextProvider>
  )
}

export { App }

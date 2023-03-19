import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutPages, HomePage, ErrorPage, ShopPage, FaqPage, CartPage, AccountPage, CheckoutPage, LoginPage, RegisterPage, ProductDetailPage, LayoutAccountPages, ProfilePage, OrdersPage, BookMarksPage, GiftsPage } from '../pages/export'
import { UserRouteProtected, UserRouteRedirect } from './export'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPages />}>
          <Route index element={<HomePage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='shop/category/:category' element={<ShopPage />} />
          <Route path='shop/product/:id' element={<ProductDetailPage />} />
          <Route path='faqs' element={<FaqPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route element={<UserRouteRedirect />}>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
          </Route>
          <Route element={<UserRouteProtected />}>
            <Route path='checkout' element={<CheckoutPage />} />
            <Route path='account' element={<LayoutAccountPages />}>
              <Route index element={<AccountPage />} />
              <Route path='profile' element={<ProfilePage />} />
              <Route path='orders' element={<OrdersPage />} />
              <Route path='bookmarks' element={<BookMarksPage />} />
              <Route path='gifts' element={<GiftsPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { App }

import { AccountPage, BookMarksPage, CartPage, CheckoutPage, ErrorPage, FaqPage, GiftsPage, HomePage, LayoutAccountPages, LayoutPages, LoginPage, OrderDetailPage, OrdersPage, ProductDetailPage, ProfilePage, RegisterPage, ShopPage } from '@/pages'
import { UserRouteProtected, UserRouteRedirect } from '@/routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
              <Route path='orders/:id' element={<OrderDetailPage />} />
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

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutPages, HomePage, ErrorPage, ShopPage, FaqPage, CartPage, AccountPage, CheckoutPage, LoginPage, RegisterPage, ProductDetailPage } from '../pages/export'

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
          <Route path='faq' element={<FaqPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='account' element={<AccountPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { App }

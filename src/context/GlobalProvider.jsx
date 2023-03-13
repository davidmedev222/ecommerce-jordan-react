import { UserProvider, CartProvider } from './export'

const GlobalProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </UserProvider>
  )
}

export { GlobalProvider }

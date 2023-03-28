import { UserProvider, CartProvider } from '@/context'

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

import { useContext } from 'react'
import { CartContext } from '../../context/cart/CartContext'

const useCart = () => {
  const context = useContext(CartContext)
  return context
}

export { useCart }

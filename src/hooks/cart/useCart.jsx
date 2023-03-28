import { useContext } from 'react'
import { CartContext } from '@/context'

const useCart = () => {
  const context = useContext(CartContext)
  return context
}

export { useCart }

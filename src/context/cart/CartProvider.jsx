import { useState } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({ children }) => {
  const [cart, updateCart] = useState([])

  const addProduct = (product) => {
    updateCart((prevCart) => [...prevCart, product])
  }

  const decreaseProduct = (id) => {
    updateCart((prevCart) => prevCart.map((product) => {
      if (product.id === id) return { ...product, quantity: product.quantity - 1 }
      return product
    }))
  }

  const increaseProduct = (id) => {
    updateCart((prevCart) => prevCart.map((product) => {
      if (product.id === id) return { ...product, quantity: product.quantity + 1 }
      return product
    }))
  }

  const removeProduct = (id) => {
    updateCart((prevCart) => prevCart.filter((product) => product.id !== id))
  }

  const emptyCart = () => {
    updateCart([])
  }

  const isInCart = (id) => {
    return cart.some((product) => product.id === id)
  }

  const totalProductsQuantity = () => {
    return cart.reduce((acumulador, product) => acumulador + product.quantity, 0)
  }

  const totalCartPrice = () => {
    return cart.reduce((acumulador, product) => acumulador + product.price * product.quantity, 0)
  }

  const data = {
    cart,
    addProduct,
    decreaseProduct,
    increaseProduct,
    removeProduct,
    emptyCart,
    isInCart,
    totalProductsQuantity,
    totalCartPrice
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export { CartProvider }

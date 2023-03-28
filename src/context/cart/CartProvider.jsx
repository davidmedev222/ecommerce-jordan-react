import { useEffect, useState } from 'react'

import { CartContext } from '@/context'

const CartProvider = ({ children }) => {
  const cartLocalStorage = JSON.parse(window.localStorage.getItem('cart'))
  const bookmarkLocalStorage = JSON.parse(window.localStorage.getItem('bookmark'))

  const [cart, updateCart] = useState(cartLocalStorage || [])
  const [bookmark, updateBookmark] = useState(bookmarkLocalStorage || [])

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
    window.localStorage.setItem('bookmark', JSON.stringify(bookmark))
  }, [cart, bookmark])

  const addProduct = (product) => {
    updateCart((prevCart) => [...prevCart, product])
  }

  const addBookmark = (product) => {
    updateBookmark((prevBookmark) => [...prevBookmark, product])
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

  const removeBookmark = (id) => {
    updateBookmark((prevBookmark) => prevBookmark.filter((product) => product.id !== id))
  }

  const emptyCart = () => {
    updateCart([])
  }

  const isInCart = (id) => {
    return cart.some((product) => product.id === id)
  }

  const isInBookmark = (id) => {
    return bookmark.some((product) => product.id === id)
  }

  const totalProductsQuantity = () => {
    return cart.reduce((acumulador, product) => acumulador + product.quantity, 0)
  }

  const totalCartPrice = () => {
    return cart.reduce((acumulador, product) => acumulador + product.price * product.quantity, 0)
  }

  const data = {
    cart,
    bookmark,
    addProduct,
    addBookmark,
    decreaseProduct,
    increaseProduct,
    removeProduct,
    removeBookmark,
    emptyCart,
    isInCart,
    isInBookmark,
    totalProductsQuantity,
    totalCartPrice
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export { CartProvider }

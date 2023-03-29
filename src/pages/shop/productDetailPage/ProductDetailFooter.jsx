import { useCart } from '@/hooks'
import { ProductDetailCount } from '@/pages/shop'
import { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const ProductDetailStyled = styled('footer')`
  grid-area: footer;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: clamp(1rem, 1vw, 2rem);
  padding: 0 clamp(1rem, 5vw, 10rem);
`
const ProductDetailPrice = styled('h6')`
  font-size: clamp(1.75rem, 2.5vw, 5rem);
  font-weight: 700;
`
const ProductDetailButton = styled('button')`
  width: 100%;
  color: white;
  font-size: clamp(1rem, 1.75vw, 3.5rem);
  font-weight: 700;
  border-radius: 3rem;
  background-color: black;
  padding: clamp(1rem, 1vw, 2rem) clamp(1.5rem, 3vw, 6rem);
`

const ProductDetailFooter = ({ product, stock, price }) => {
  const { addProduct } = useCart()

  const [quantity, updateQuantity] = useState(1)

  const handleQuantityDecrease = () => {
    quantity > 1 && updateQuantity(prevQuantity => prevQuantity - 1)
  }
  const handleQuantityIncrease = () => {
    quantity < stock && updateQuantity((prevQuantity) => prevQuantity + 1)
  }
  const handleAddToCart = () => {
    addProduct({ ...product, quantity })
    toast.success('Added To Cart')
  }

  return (
    <ProductDetailStyled>
      <ProductDetailPrice>${price}</ProductDetailPrice>
      <ProductDetailCount decreaseQuantity={handleQuantityDecrease} increaseQuantity={handleQuantityIncrease} quantity={quantity} />
      <ProductDetailButton onClick={handleAddToCart}>Add to cart</ProductDetailButton>
    </ProductDetailStyled>
  )
}

export { ProductDetailFooter }

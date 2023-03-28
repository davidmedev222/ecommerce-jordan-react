import { IconDecrease, IconIncrease } from '@/components'
import styled from 'styled-components'

const ProductOptions = styled('footer')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
`
const ProductButton = styled('button')`
  width: clamp(2.5rem, 3.5vw, 7rem);
  height: clamp(2.5rem, 3.5vw, 7rem);
`
const ProductQuantity = styled('span')`
  font-size: clamp(1.5rem, 2.5vw, 5rem);
`

const ProductDetailCount = ({ decreaseQuantity, increaseQuantity, quantity }) => {
  return (
    <ProductOptions>
      <ProductButton onClick={decreaseQuantity}><IconDecrease /></ProductButton>
      <ProductQuantity>{quantity}</ProductQuantity>
      <ProductButton onClick={increaseQuantity}><IconIncrease /></ProductButton>
    </ProductOptions>
  )
}

export { ProductDetailCount }

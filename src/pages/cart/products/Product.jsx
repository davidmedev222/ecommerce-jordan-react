import { IconDecrease, IconIncrease, IconTrash } from '@/components'
import { useCart } from '@/hooks'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const ProductStyled = styled('article')`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1.5rem, 3vw, 6rem);
  border-radius:clamp(1rem, 1vw, 2rem);
  background-color: #d1d0d6;
  padding: clamp(1rem, 1vw, 2rem);
`
const ProductImage = styled('img')`
  width: clamp(6rem, 9.25vw, 18.5rem);
  object-fit: contain;
  aspect-ratio: 1;
`
const ProductDetails = styled('header')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(.25rem, .25vw, .5rem);
  text-align: center;
`
const ProductHeading = styled('h2')`
  text-transform: capitalize;
  font-size: clamp(1.5rem, 2vw, 4rem);
  font-weight: 800;
`
const ProductColor = styled('span')`
  text-transform: capitalize;
  font-size: clamp(1rem, 1vw, 2rem);
`
const ProductPrice = styled('h3')`
  font-size: clamp(1.25rem, 1.75vw, 3.5rem);
  font-weight: 700;
`
const ProductOptions = styled('footer')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
`
const ProductButton = styled('button')`
  width: clamp(2rem, 2vw, 4rem);
  height: clamp(2rem, 2vw, 4rem);
`
const ProductQuantity = styled('span')`
  font-size: clamp(1.25rem, 2vw, 4rem);
`

const Product = (props) => {
  const { id, imageOne, name, color, price, quantity, stock } = props

  const { decreaseProduct, increaseProduct, removeProduct } = useCart()

  const handleDecrease = () => {
    quantity > 1 ? decreaseProduct(id) : toast.info('Min. Quantity Available')
  }
  const handleIncrease = () => {
    quantity < stock ? increaseProduct(id) : toast.info('Max. Quantity Available')
  }
  const handleRemove = () => {
    removeProduct(id)
    toast.error('Product Removed')
  }

  return (
    <ProductStyled>
      <ProductImage src={imageOne} alt={name} />
      <ProductDetails>
        <ProductHeading>{name}</ProductHeading>
        <ProductColor>{color}</ProductColor>
        <ProductPrice>${price}</ProductPrice>
      </ProductDetails>
      <ProductOptions>
        <ProductButton onClick={handleDecrease}><IconDecrease /></ProductButton>
        <ProductQuantity>{quantity}</ProductQuantity>
        <ProductButton onClick={handleIncrease}><IconIncrease /></ProductButton>
        <ProductButton onClick={handleRemove}><IconTrash /></ProductButton>
      </ProductOptions>
    </ProductStyled>
  )
}

export { Product }

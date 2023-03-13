import styled from 'styled-components'
import { IconIncrease, IconDecrease, IconTrash } from '../../../components/export'

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
  font-size: clamp(1.5rem, 2vw, 4rem);
  font-weight: 800;
`
const ProductColor = styled('span')`
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

const Product = () => {
  return (
    <ProductStyled>
      <ProductImage src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1668792321/ecommerce-jordan-react/product-29_t02pe2.webp' alt='producto' />
      <ProductDetails>
        <ProductHeading>future light one</ProductHeading>
        <ProductColor>White / Gold / Black</ProductColor>
        <ProductPrice>$175</ProductPrice>
      </ProductDetails>
      <ProductOptions>
        <ProductButton><IconDecrease /></ProductButton>
        <ProductQuantity>0</ProductQuantity>
        <ProductButton><IconIncrease /></ProductButton>
        <ProductButton><IconTrash /></ProductButton>
      </ProductOptions>
    </ProductStyled>
  )
}

export { Product }
import styled from 'styled-components'

const ProductStyled = styled('article')`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
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
const ProductQuantity = styled('span')`
  text-align: center;
  font-size: clamp(1.25rem, 1.75vw, 3.5rem);
  font-weight: 700;
  flex-basis: 100%;
`

const Product = (props) => {
  const { imageTwo, name, color, price, quantity } = props

  return (
    <ProductStyled>
      <ProductImage src={imageTwo} alt={name} />
      <ProductDetails>
        <ProductHeading>{name}</ProductHeading>
        <ProductColor>{color}</ProductColor>
        <ProductPrice>${price}</ProductPrice>
      </ProductDetails>
      <ProductQuantity>x{quantity}</ProductQuantity>
    </ProductStyled>
  )
}

export { Product }

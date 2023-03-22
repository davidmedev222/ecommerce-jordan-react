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
  margin: clamp(.5rem, .5vw, 1rem) 0;
`
const ProductImage = styled('img')`
  width: clamp(10rem, 10vw, 20rem);
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
const ProductHeading = styled('h4')`
  text-transform: capitalize;
  font-size: clamp(1.5rem, 2vw, 4rem);
  font-weight: 800;
`
const ProductColor = styled('span')`
  text-transform: capitalize;
  font-size: clamp(1rem, 1vw, 2rem);
`
const ProductPrice = styled('h5')`
  font-size: clamp(1.25rem, 1.75vw, 3.5rem);
  font-weight: 700;
`
const ProductQuantity = styled('span')`
  text-align: center;
  font-size: clamp(1.25rem, 1.75vw, 3.5rem);
  font-weight: 700;
  flex-basis: 100%;
`

const OrderDetailProduct = (props) => {
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

export { OrderDetailProduct }

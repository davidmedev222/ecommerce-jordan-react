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
  width: clamp(5rem, 10vw, 20rem);
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

const Order = () => {
  return (
    <ProductStyled>
      <ProductImage src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1668792322/ecommerce-jordan-react/product-32_2_icniak.webp' alt='one mullti' />
      <ProductDetails>
        <ProductHeading>One Multicolor</ProductHeading>
        <ProductColor>black / yellow / grey</ProductColor>
        <ProductPrice>$250</ProductPrice>
      </ProductDetails>
      <ProductQuantity>x6</ProductQuantity>
    </ProductStyled>
  )
}

export { Order }

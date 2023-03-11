import styled, { css } from 'styled-components'
import { Product } from './Product'

const ProductsStyled = styled('section')`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`
const ProductsButton = styled('button')`
  color: white;
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 700;
  border-radius: 3rem;
  background-color: black;
  padding: clamp(1rem, 1vw, 2rem) clamp(1.5rem, 3vw, 6rem);

  ${({ align }) => align && css`
    align-self: ${align};
  `}
`
const ProductsDetails = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 clamp(1rem, 5vw, 10rem);
  font-size: clamp(1.2rem, 1.25vw, 2.5rem);
  margin: clamp(.5rem, .5vw, 1rem) 0;
`
const ProductsTotal = styled('h2')`
  color: grey;
  font-weight: 600;
`
const ProductsPrice = styled('h3')`
  font-weight: 700;
`
const Products = () => {
  return (
    <ProductsStyled>
      <Product />
      <Product />
      <ProductsButton align='flex-end'>Empty Cart</ProductsButton>
      <ProductsDetails>
        <ProductsTotal>Total (12 products):</ProductsTotal>
        <ProductsPrice>$270</ProductsPrice>
      </ProductsDetails>
      <ProductsButton>Go to checkout</ProductsButton>
    </ProductsStyled>
  )
}

export { Products }

import styled from 'styled-components'
import { Product } from './Product'

const SectionStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(7.5rem, 15.5vw, 31rem), 1fr));
  gap: clamp(1.5rem, 3vw, 6rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`

const Products = () => {
  return (
    <SectionStyled>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </SectionStyled>
  )
}

export { Products }

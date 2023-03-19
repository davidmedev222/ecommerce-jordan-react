import { Product } from './Product'
import styled from 'styled-components'

const SectionStyled = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: clamp(1rem, 1vw, 2rem);
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
    </SectionStyled>
  )
}

export { Products }

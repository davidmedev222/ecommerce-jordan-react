import styled from 'styled-components'
import { Product } from './Product'

const SectionStyled = styled('section')`
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
    </SectionStyled>
  )
}

export { Products }

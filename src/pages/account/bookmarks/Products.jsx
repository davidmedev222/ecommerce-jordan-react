import { Product } from '@/pages/account'
import styled from 'styled-components'

const SectionStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(1.5rem, 3vw, 6rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);

 @media screen and (max-width: 49.75rem) {
    grid-template-columns: repeat(2, 1fr);
 }
`

const Products = ({ data }) => {
  return (
    <SectionStyled>
      {data.map((product) => <Product key={product.id} {...product} />)}
    </SectionStyled>
  )
}

export { Products }

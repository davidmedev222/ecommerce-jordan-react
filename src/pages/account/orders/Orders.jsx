import styled from 'styled-components'
import { Order } from './Order'

const UlStyled = styled('ul')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);

 @media screen and (max-width: 49.75rem) {
    grid-template-columns: 1fr;
 }
`

const Orders = () => {
  return (
    <UlStyled>
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
    </UlStyled>
  )
}

export { Orders }

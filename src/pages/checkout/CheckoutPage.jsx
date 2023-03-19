import { Brief } from './Brief'
import styled from 'styled-components'
import { Products } from './Products'

const MainStyled = styled('main')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: baseline;
  gap: clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);

 @media screen and (max-width: 64rem) {
    grid-template-columns: 1fr;
 }

`

const CheckoutPage = () => {
  return (
    <MainStyled>
      <Brief />
      <Products />
    </MainStyled>
  )
}

export { CheckoutPage }

import { useCart } from '@/hooks'
import { Brief, Products } from '@/pages/checkout'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'

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
  const { cart } = useCart()

  if (cart.length === 0) return <Navigate to='/cart' />

  return (
    <MainStyled>
      <Brief />
      <Products />
    </MainStyled>
  )
}

export { CheckoutPage }

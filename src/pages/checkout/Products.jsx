import { useCart } from '@/hooks'
import { Product } from '@/pages/checkout'
import styled from 'styled-components'

const SectionStyled = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: clamp(1rem, 1vw, 2rem);
`

const Products = () => {
  const { cart } = useCart()

  const products = cart.map((product) => {
    const { id, imageTwo, name, color, price, quantity } = product
    return <Product key={id} imageTwo={imageTwo} name={name} color={color} price={price} quantity={quantity} />
  })

  return (
    <SectionStyled>
      {products}
    </SectionStyled>
  )
}

export { Products }

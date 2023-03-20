import styled from 'styled-components'
import { Order } from './Order'

const SectionStyled = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`

const Orders = () => {
  return (
    <SectionStyled>
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
    </SectionStyled>
  )
}

export { Orders }

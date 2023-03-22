import styled from 'styled-components'
import { OrderDetailProduct } from './OrderDetailProduct'

const SectionStyled = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  gap: .5rem;
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
  word-break: break-all;
`
const OrderName = styled('h2')`
  font-size: clamp(1.5rem, 2vw, 4rem);
  font-weight: 800;
`
const OrderEmail = styled('span')`
  font-size: clamp(1rem, 1vw, 2rem);
`
const OrderDate = styled('h3')`
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 600;
`
const OrderDetailTotal = styled('h4')`
  font-size: clamp(1.5rem, 2vw, 4rem);
  font-weight: 700;
`
const OrderDetail = () => {
  return (
    <SectionStyled>
      <OrderName>D. Mamani Escalera</OrderName>
      <OrderEmail>davidcatrielmamaniescalera@gmail.com</OrderEmail>
      <OrderDate>Tue Mar 21 2023 20:23:06 GMT-0300 (hora estándar de Argentina)</OrderDate>
      <OrderDetailProduct />
      <OrderDetailProduct />
      <OrderDetailTotal>( 25 products ) $1200</OrderDetailTotal>
    </SectionStyled>
  )
}

export { OrderDetail }

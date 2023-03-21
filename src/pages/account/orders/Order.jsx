import { Link } from 'react-router-dom'
import styled from 'styled-components'

const OrderStyled = styled('li')`
  border-radius:clamp(1rem, 1vw, 2rem);
  background-color: #d1d0d6;
  padding: clamp(1rem, 1vw, 2rem);
`
const OrderLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(.25rem, .25vw, .5rem);
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
  font-size: clamp(1.25rem, 1.75vw, 3.5rem);
  font-weight: 700;
`

const Order = () => {
  return (
    <OrderStyled>
      <OrderLink to='asdsad'>
        <OrderName>David .M</OrderName>
        <OrderEmail>davidcatrielmamaniescalera@gmail.com</OrderEmail>
        <OrderDate>20 mar 2023 17:44:34</OrderDate>
      </OrderLink>
    </OrderStyled>
  )
}

export { Order }

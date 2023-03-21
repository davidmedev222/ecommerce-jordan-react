import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  gap: clamp(.5rem, .5vw, 1rem);
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

const Order = ({ id, buyer, date }) => {
  const { displayName, email } = buyer

  return (
    <OrderStyled>
      <OrderLink to={id}>
        <OrderName>{displayName}</OrderName>
        <OrderEmail>{email}</OrderEmail>
        <OrderDate>{date.toDate().toString()}</OrderDate>
      </OrderLink>
    </OrderStyled>
  )
}

export { Order }

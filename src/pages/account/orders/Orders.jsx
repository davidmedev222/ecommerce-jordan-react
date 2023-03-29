import { Order } from '@/pages/account'
import styled from 'styled-components'

const UlStyled = styled('ul')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);

 @media screen and (max-width: 49.75rem) {
    grid-template-columns: 1fr;
 }
`

const Orders = ({ data }) => {
  const orders = data.map((document) => {
    const { id, data } = document
    return <Order key={id} id={id} buyer={data.buyer} date={data.date} />
  })

  return (
    <UlStyled>
      {orders.length > 0 && orders}
    </UlStyled>
  )
}

export { Orders }

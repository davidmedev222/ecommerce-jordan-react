import { OrderDetailProduct } from '@/pages/account'
import styled from 'styled-components'

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
const OrderDetail = ({ data }) => {
  const { buyer, date, products, total } = data

  const orderDetailProducts = products.map((product) => {
    const { id, imageTwo, name, color, price, quantity } = product
    return <OrderDetailProduct key={id} imageTwo={imageTwo} name={name} color={color} price={price} quantity={quantity} />
  })
  return (
    <SectionStyled>
      <OrderName>{buyer.displayName}</OrderName>
      <OrderEmail>{buyer.email}</OrderEmail>
      <OrderDate>{date.toDate().toString()}</OrderDate>
      {orderDetailProducts.length > 0 && orderDetailProducts}
      <OrderDetailTotal>( {total.products} {total.products === 1 ? 'product' : 'products'} ) ${total.price}</OrderDetailTotal>
    </SectionStyled>
  )
}

export { OrderDetail }

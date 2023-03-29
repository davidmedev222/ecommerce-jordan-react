import { useCart } from '@/hooks'
import { Product } from '@/pages/cart'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled, { css } from 'styled-components'

const ProductsStyled = styled('section')`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`
const ProductsButton = styled('button')`
  color: white;
  text-align: center;
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 700;
  border-radius: 3rem;
  background-color: black;
  padding: clamp(1rem, 1vw, 2rem) clamp(1.5rem, 3vw, 6rem);

  ${({ align }) => align && css`
    align-self: ${align};
  `}
`
const ProductsDetails = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 clamp(1rem, 5vw, 10rem);
  font-size: clamp(1.2rem, 1.25vw, 2.5rem);
  margin: clamp(.5rem, .5vw, 1rem) 0;
`
const ProductsTotal = styled('h2')`
  color: grey;
  font-weight: 600;
`
const ProductsPrice = styled('h3')`
  font-weight: 700;
`
const Products = () => {
  const { cart, emptyCart, totalProductsQuantity, totalCartPrice } = useCart()

  const products = cart.map((product) => {
    const { id, imageOne, name, color, price, quantity, stock } = product
    return <Product key={id} id={id} imageOne={imageOne} name={name} color={color} price={price} quantity={quantity} stock={stock} />
  })

  const handleEmptyCart = () => {
    emptyCart()
    toast.info('Cart Removed')
  }

  return (
    <ProductsStyled>
      {products}
      <ProductsButton onClick={handleEmptyCart} align='flex-end'>Empty Cart</ProductsButton>
      <ProductsDetails>
        <ProductsTotal>Total ( {totalProductsQuantity()} {totalProductsQuantity() > 1 ? 'products' : 'product'} ):</ProductsTotal>
        <ProductsPrice>${totalCartPrice()}</ProductsPrice>
      </ProductsDetails>
      <ProductsButton as={Link} to='/checkout'>Go to checkout</ProductsButton>
    </ProductsStyled>
  )
}

export { Products }

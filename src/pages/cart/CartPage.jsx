import { useCart } from '@/hooks'
import { Empty, Products } from '@/pages/cart'

const CartPage = () => {
  const { cart } = useCart()

  return (
    <main>
      {cart.length > 0 ? <Products /> : <Empty />}
    </main>
  )
}

export { CartPage }

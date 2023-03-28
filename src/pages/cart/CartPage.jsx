import { useCart } from '@/hooks'
import { Empty } from './empty/Empty'
import { Products } from './products/Products'

const CartPage = () => {
  const { cart } = useCart()

  return (
    <main>
      {cart.length > 0 ? <Products /> : <Empty />}
    </main>
  )
}

export { CartPage }

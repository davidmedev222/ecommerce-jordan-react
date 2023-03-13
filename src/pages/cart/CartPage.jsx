import { useCart } from '../../hooks/export'
import { Products } from './products/Products'
import { Empty } from './empty/Empty'

const CartPage = () => {
  const { cart } = useCart()

  return (
    <main>
      {cart.length > 0 ? <Products /> : <Empty />}
    </main>
  )
}

export { CartPage }

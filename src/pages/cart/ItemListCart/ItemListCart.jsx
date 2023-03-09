import { CartContext } from '../../.././context/cart/CartContext' // CONTEXT
import { ItemList } from './ItemList' // COMPONENT
import { EmptyCart } from '.././EmptyCart/EmptyCart' // COMPONENT
import { useContext } from 'react' // HOOKS

const ItemListCart = () => {
  const { cart } = useContext(CartContext) // HELPERS

  return (
    <main className='main-cart'>
      <section className='cart'>
        {/* TITLE */}
        {cart.length > 0 && <h1 className='h1'>my cart</h1>}
        {/* COMPONENT ITEM LIST OR EMPTY CART */}
        {cart.length > 0 ? <ItemList /> : <EmptyCart />}
      </section>
    </main>
  )
}

export { ItemListCart }

import { CartContext } from '../../.././context/cart/CartContext' // CONTEXT
import { ButtonLink } from '../../../components/button/ButtonLink' // COMPONENT
import { Button } from '../../.././components/button/Button' // COMPONENT
import { Item } from './Item' // COMPONENT
import { useContext } from 'react' // HOOKS
import { useOrder } from '../../../hooks/firestore/useOrder' // CUSTOM HOOK

const ItemList = () => {
  const { cart, removeCart, totalQuantityItems, totalPrice, updateOrder } = useContext(CartContext) // HELPERS

  const items = cart.map((cadaItem) => <Item key={cadaItem.cp} {...cadaItem} />) // COMPONENT ITEM

  const { createOrder } = useOrder() // CUSTOM HELPERS

  const handleCreateOrder = () => {
    updateOrder(createOrder(cart, totalQuantityItems, totalPrice)) // ORDER UPDATE
  } // EVENT

  return (
    <div className='cart-content'>
      {/* COMPONENT ITEM */}
      {items}
      <div className='cart-options'>
        {/* COMPONENT BUTTON */}
        <Button className='cart-empty' onClick={removeCart}>
          empty cart
        </Button>
        {/* DISCOUNT */}
        <div className='cart-discount'>
          <input className='cart-cupon' type='text' name='cupon' id='cupon' placeholder='promo code' />
          {/* COMPONENT BUTTON */}
          <Button className='cart-apply'>apply</Button>
        </div>
        {/* DETAILS */}
        <article className='cart-details'>
          <h2 className='cart-total'>total</h2>
          <span className='cart-description'>({totalQuantityItems()}) products</span>
          <span className='cart-price'>{totalPrice()} USD</span>
        </article>
        {/* COMPONENT BUTTON */}
        <ButtonLink to='/checkout' onClick={handleCreateOrder}>
          checkout
        </ButtonLink>
      </div>
    </div>
  )
}

export { ItemList }

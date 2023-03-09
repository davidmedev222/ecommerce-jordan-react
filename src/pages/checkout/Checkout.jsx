import { CartContext } from '../../context/cart/CartContext' // CONTEXT
import { CheckoutBrief } from './CheckoutBrief' // COMPONENT
import { Navigate } from 'react-router-dom' // HOOKS
import { useContext } from 'react' // HOOKS

const Checkout = () => {
  const { order } = useContext(CartContext) // HELPERS

  if (!order) return <Navigate to='/cart' /> // REDIRECT

  return (
    <main className='main-checkout'>
      {/* COMPONENT */}
      <CheckoutBrief />
    </main>
  )
}

export { Checkout }

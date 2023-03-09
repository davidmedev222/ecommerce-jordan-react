import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore' // FIRESTORE
import { UserContext } from '../../context/user/UserContext' // CONTEXT
import { CartContext } from '../../context/cart/CartContext' // CONTEXT
import { useContext } from 'react' // HOOKS

const useOrder = () => {
  const { user } = useContext(UserContext) // HELPERS
  const { order } = useContext(CartContext) // HELPERS

  const createOrder = (items, totalQuantityItems, totalPrice) => {
    return {
      buyer: {
        name: user?.displayName ?? '',
        email: user?.email ?? '',
        phone: user?.phoneNumber ?? ''
      },
      items: [...items],
      total: {
        items: totalQuantityItems(),
        price: totalPrice()
      },
      date: serverTimestamp()
    }
  }

  const postOrder = async () => {
    try {
      const database = getFirestore()
      await addDoc(collection(database, 'orders'), order)
    } catch (error) {
      console.log(error)
    }
  }

  return { createOrder, postOrder }
}

export { useOrder }

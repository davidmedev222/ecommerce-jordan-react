import { getItem } from '../../../services/firestore/getItem' // FIRESTORE
import { ItemDetail } from './ItemDetail' // COMPONENT
import { useState, useEffect } from 'react' // HOOKS
import { useParams } from 'react-router-dom' // HOOKS

const ItemDetailContainer = () => {
  const { id } = useParams() // PARAM ROUTE
  const [product, updateProduct] = useState([]) // STATE

  const componentItemDetail = product.map((cadaItem) => <ItemDetail key={cadaItem.cp} {...cadaItem} />)

  useEffect(() => {
    getItem(id).then((response) => updateProduct(response)) // RESULT REQUEST
  }, [id])

  return (
    <div className='section'>
      {/* COMPONENT ITEM DETAIL OR LOADING */}
      {product.length > 0 ? componentItemDetail : <h1 className='h1'>CARGANDO</h1>}
    </div>
  )
}

export { ItemDetailContainer }

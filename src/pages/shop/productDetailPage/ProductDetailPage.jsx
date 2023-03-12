import { useEffect, useState } from 'react'
import { getProduct } from '../../../services/firestore/products/getProduct'
import { useParams } from 'react-router-dom'
import { ProductDetail } from './ProductDetail'

const ProductDetailPage = () => {
  const [data, updateData] = useState([])
  const [error, updateError] = useState('')
  const { id } = useParams()

  const productDetail = data.map((product) => {
    const { id } = product
    return <ProductDetail key={id} {...product} />
  })

  useEffect(() => {
    getProduct(id)
      .then((product) => updateData(product))
      .catch((error) => updateError(error.message))
  }, [])

  return (
    <main>
      {error && <h1>{error}</h1>}
      {productDetail.length > 0 && productDetail}
    </main>
  )
}

export { ProductDetailPage }

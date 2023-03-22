import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ErrorNotFound } from '../../../components/export'
import { getProduct } from '../../../services/firestore/products/getProduct'
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
      .catch((error) => updateError(error))
  }, [])

  return (
    <main>
      {error && <ErrorNotFound message={error.message} />}
      {productDetail.length > 0 && productDetail}
    </main>
  )
}

export { ProductDetailPage }

import { ErrorNotFound, Spinner } from '@/components'
import { ProductDetail } from '@/pages/shop'
import { getProduct } from '@/services/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const [data, updateData] = useState([])
  const [error, updateError] = useState('')
  const [loader, updateLoader] = useState(true)
  const { id } = useParams()

  const productDetail = data.map((product) => {
    const { id } = product
    return <ProductDetail key={id} {...product} />
  })

  useEffect(() => {
    getProduct(id)
      .then((product) => updateData(product))
      .catch((error) => updateError(error))
      .finally(() => updateLoader(false))
  }, [])

  return (
    <main>
      {loader && <Spinner />}
      {error && <ErrorNotFound message={error.message} />}
      {productDetail.length > 0 && productDetail}
    </main>
  )
}

export { ProductDetailPage }

import { ErrorNotFound, Spinner } from '@/components'
import { OrderDetail } from '@/pages/account'
import { getOrder } from '@/services/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OrderDetailPage = () => {
  const [data, updateData] = useState(null)
  const [loader, updateLoader] = useState(true)
  const [error, updateError] = useState('')
  const { id } = useParams()

  useEffect(() => {
    getOrder(id)
      .then((order) => updateData(order))
      .catch((error) => updateError(error))
      .finally(() => updateLoader(false))
  }, [])

  return (
    <main>
      {loader && <Spinner />}
      {error && <ErrorNotFound message={error.message} />}
      {data && <OrderDetail data={data} />}
    </main>
  )
}

export { OrderDetailPage }

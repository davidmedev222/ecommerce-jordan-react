import { useState, useEffect } from 'react'
import { getOrders } from '../../../services/export'
import { Spinner } from '../../../components/export'
import { Orders } from './Orders'

const OrdersPage = () => {
  const [data, updateData] = useState([])
  const [loader, updateLoader] = useState(true)

  useEffect(() => {
    getOrders()
      .then((orders) => updateData(orders))
      .finally(() => updateLoader(false))
  }, [])

  return (
    <main>
      {loader && <Spinner />}
      <Orders data={data} />
    </main>
  )
}

export { OrdersPage }

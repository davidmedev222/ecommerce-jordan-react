import { useState, useEffect } from 'react'
import { getOrders } from '../../../services/export'
import { Orders } from './Orders'

const OrdersPage = () => {
  const [data, updateData] = useState([])

  useEffect(() => {
    getOrders()
      .then((orders) => updateData(orders))
  }, [])

  return (
    <main>
      <Orders data={data} />
    </main>
  )
}

export { OrdersPage }

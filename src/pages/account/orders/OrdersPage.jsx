import { Spinner } from '@/components'
import { Orders } from '@/pages/account'
import { getOrders } from '@/services/firestore'
import { useEffect, useState } from 'react'

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

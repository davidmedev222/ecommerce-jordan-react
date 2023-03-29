import { Spinner } from '@/components'
import { Categories, Products } from '@/pages/shop'
import { getProducts } from '@/services/firestore'
import { useEffect, useState } from 'react'

const ShopPage = () => {
  const [data, updateData] = useState([])
  const [loader, updateLoader] = useState(true)

  useEffect(() => {
    getProducts()
      .then((products) => updateData(products))
      .finally(() => updateLoader(false))
  }, [])

  return (
    <main>
      <Categories />
      {loader && <Spinner />}
      <Products data={data} />
    </main>
  )
}

export { ShopPage }

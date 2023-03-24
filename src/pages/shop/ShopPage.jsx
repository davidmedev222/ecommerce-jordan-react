import { useEffect, useState } from 'react'
import { getProducts } from '../../services/export'
import { Categories } from './categories/Categories'
import { Products } from './products/Products'

const ShopPage = () => {
  const [data, updateData] = useState([])

  useEffect(() => {
    getProducts()
      .then((products) => updateData(products))
  }, [])

  return (
    <main>
      <Categories />
      <Products data={data} />
    </main>
  )
}

export { ShopPage }

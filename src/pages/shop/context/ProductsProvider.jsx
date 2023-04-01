import { ProductsContext } from '@/pages/shop'
import { getProducts } from '@/services/firestore'
import { useEffect, useState } from 'react'

const ProductsProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [products, setProducts] = useState([])
  const [inputSearch, setInputSearch] = useState('')
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    getProducts()
      .then((products) => {
        setData(products)
        setProducts(products)
      })
      .finally(() => setLoader(false))
  }, [])

  const filterBySearch = (text) => {
    const foundProducts = data.filter((product) => product.name.toLowerCase().includes(text))
    setProducts(foundProducts)
  }

  const handleChange = (ev) => {
    const text = ev.target.value.toLowerCase()
    filterBySearch(text)
    setInputSearch(text)
  }

  const sortByAscending = () => {
    const productsSortedByAscending = products.sort((a, b) => a.name.localeCompare(b.name))
    setProducts([...productsSortedByAscending])
  }

  const sortByDescending = () => {
    const productsSortedByDescending = products.sort((a, b) => b.name.localeCompare(a.name))
    setProducts([...productsSortedByDescending])
  }

  const values = {
    data,
    products,
    inputSearch,
    loader,
    handleChange,
    filterBySearch,
    sortByAscending,
    sortByDescending
  }

  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
}

export { ProductsProvider }

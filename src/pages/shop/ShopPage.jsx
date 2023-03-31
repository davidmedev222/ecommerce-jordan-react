import { Spinner } from '@/components'
import { SearchOptions, Categories, Products } from '@/pages/shop'
import { getProducts } from '@/services/firestore'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const MainStyled = styled('main')`
  overflow: hidden;
`

const ShopPage = () => {
  const [data, updateData] = useState([])
  const [loader, updateLoader] = useState(true)

  useEffect(() => {
    getProducts()
      .then((products) => updateData(products))
      .finally(() => updateLoader(false))
  }, [])

  const sortByAscending = () => {
    const newDataSorted = data.sort((a, b) => a.name.localeCompare(b.name))
    updateData([...newDataSorted])
  }

  const sortByDescending = () => {
    const newDataSorted = data.sort((a, b) => b.name.localeCompare(a.name))
    updateData([...newDataSorted])
  }

  return (
    <MainStyled>
      <SearchOptions sortByAscending={sortByAscending} sortByDescending={sortByDescending} />
      <Categories />
      {loader && <Spinner />}
      <Products data={data} />
    </MainStyled>
  )
}

export { ShopPage }

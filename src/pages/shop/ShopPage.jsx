import { Spinner } from '@/components'
import { Categories, Products } from '@/pages/shop'
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

  return (
    <MainStyled>
      <Categories />
      {loader && <Spinner />}
      <Products data={data} />
    </MainStyled>
  )
}

export { ShopPage }

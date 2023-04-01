import { Categories, Products, ProductsProvider, SearchOptions } from '@/pages/shop'
import styled from 'styled-components'

const MainStyled = styled('main')`
  display: grid;
  grid-template-rows: auto auto 1fr;
  overflow: hidden;
`

const ShopPage = () => {
  return (
    <ProductsProvider>
      <MainStyled>
        <SearchOptions />
        <Categories />
        <Products />
      </MainStyled>
    </ProductsProvider>
  )
}

export { ShopPage }

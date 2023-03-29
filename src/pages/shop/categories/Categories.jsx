import { CategoryLink } from '@/pages/shop'
import styled from 'styled-components'

const CategoriesStyled = styled('div')`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap:clamp(1rem, 3vw, 6rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`

const Categories = () => {
  return (
    <CategoriesStyled>
      <CategoryLink to='/shop' category='all' />
      <CategoryLink to='/shop/category/2017' category='2017' />
      <CategoryLink to='/shop/category/2018' category='2018' />
      <CategoryLink to='/shop/category/2019' category='2019' />
      <CategoryLink to='/shop/category/2020' category='2020' />
    </CategoriesStyled>
  )
}

export { Categories }

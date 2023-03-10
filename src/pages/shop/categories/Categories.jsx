import styled from 'styled-components'
import { CategoryLink } from './CategoryLink'

const CategoriesStyled = styled('div')`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap:clamp(1rem, 3vw, 6rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`

const Categories = () => {
  const data = [
    {
      id: 1,
      to: '/shop',
      category: 'all'
    },
    {
      id: 2,
      to: '/shop/category/2017',
      category: '2017'
    },
    {
      id: 3,
      to: '/shop/category/2018',
      category: '2018'
    },
    {
      id: 4,
      to: '/shop/category/2019',
      category: '2019'
    },
    {
      id: 5,
      to: '/shop/category/2020',
      category: '2020'
    }
  ]

  const categoryLinks = data.map((link) => {
    const { id, to, category } = link
    return <CategoryLink key={id} to={to} category={category} />
  })

  return (
    <CategoriesStyled>
      {categoryLinks.length > 0 ? categoryLinks : 'loading...'}
    </CategoriesStyled>
  )
}

export { Categories }

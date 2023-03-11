import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Product } from './Product'

const SectionStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(7.5rem, 15.5vw, 31rem), 1fr));
  gap: clamp(1.5rem, 3vw, 6rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`

const Products = ({ data }) => {
  const { category } = useParams()

  const categories = {
    2017: '2017',
    2018: '2018',
    2019: '2019',
    2020: '2020'
  }

  const filterDataByParam = () => {
    return data
      .filter((product) => product.year === category)
      .map((product) => {
        const { id, imageTwo, name, color, price } = product
        return <Product key={id} image={imageTwo} name={name} color={color} price={price} />
      })
  }

  const allData = () => {
    return data
      .map((product) => {
        const { id, imageTwo, name, color, price } = product
        return <Product key={id} image={imageTwo} name={name} color={color} price={price} />
      })
  }

  const products = categories[category] ? filterDataByParam() : allData()

  return (
    <SectionStyled>
      {products.length > 0 ? products : 'loading products...'}
    </SectionStyled>
  )
}

export { Products }

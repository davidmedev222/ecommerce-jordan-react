import { Spinner } from '@/components'
import { Product, ProductsContext } from '@/pages/shop'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const SectionStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(9rem, 15vw, 30rem), 1fr));
  justify-content: center;
  align-items: center;
  gap: clamp(1.5rem, 3vw, 6rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`
const HeadingProductNotFound = styled('h3')`
  font-size: clamp(1.25rem, 1.5vw, 3rem);
  text-align: center;
  word-break: break-all;
`
const Products = () => {
  const { inputSearch, products, loader } = useContext(ProductsContext)
  const [parent] = useAutoAnimate()
  const { category } = useParams()

  const categories = {
    2017: '2017',
    2018: '2018',
    2019: '2019',
    2020: '2020'
  }

  const filterProductsByParam = () => {
    return products
      .filter((product) => product.year === category)
      .map((product) => {
        const { id, cp, imageTwo, name, color, price } = product
        return <Product key={id} id={id} cp={cp} image={imageTwo} name={name} color={color} price={price} />
      })
  }

  const allProducts = () => {
    return products
      .map((product) => {
        const { id, cp, imageTwo, name, color, price } = product
        return <Product key={id} id={id} cp={cp} image={imageTwo} name={name} color={color} price={price} />
      })
  }

  const productsList = categories[category] ? filterProductsByParam() : allProducts()

  return (
    <SectionStyled ref={parent}>
      {loader && <Spinner />}
      {!loader && productsList.length === 0 && <HeadingProductNotFound>No product matches with {inputSearch}</HeadingProductNotFound>}
      {productsList.length > 0 && productsList}
    </SectionStyled>
  )
}

export { Products }

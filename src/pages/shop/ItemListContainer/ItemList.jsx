import { Item } from './Item' // COMPONENT
import { useParams } from 'react-router-dom' // HOOKS

const ItemList = ({ items }) => {
  const { category } = useParams() // PARAM ROUTE

  // COMPONENT ITEM FILTERED BY PARAM ROUTE OR ITEM
  const component = (paramRoute, products) => {
    if (paramRoute) {
      return products
        .filter((cadaJordan) => cadaJordan.year === category)
        .map((cadaJordan) => <Item key={cadaJordan.cp} {...cadaJordan} />)
    } else {
      return products.map((cadaJordan) => <Item key={cadaJordan.cp} {...cadaJordan} />)
    }
  }
  const products = component(category, items) // RESULT COMPONENT ITEM

  return (
    <section className='shop-content'>
      {/* COMPONENT ITEM */}
      {products.length > 0 ? products : <h1 className='h1'>CARGANDO</h1>}
    </section>
  )
}

export { ItemList }

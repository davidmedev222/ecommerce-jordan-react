import { getItems } from '../../.././services/firestore/getItems' // FIRESTORE
import { ItemList } from './ItemList' // COMPONENT
import { ButtonFilter } from '../../.././components/button/ButtonFilter' // COMPONENT
import { useEffect, useState } from 'react' // HOOKS

const ItemListContainer = () => {
  const [products, updateProducts] = useState([]) // STATE

  useEffect(() => {
    getItems().then((response) => updateProducts(response)) // RESULT REQUEST
  }, [])

  return (
    <main className='main-shop'>
      <section className='shop'>
        {/* TITLE */}
        <h2 className='h1'>shop</h2>
        {/* BTN GROUP */}
        <div className='shop-btn-group'>
          <ButtonFilter path='/shop' text='ALL' />
          <ButtonFilter path='/shop/category/2019' text={2019} />
          <ButtonFilter path='/shop/category/2020' text={2020} />
          <ButtonFilter path='/shop/category/2021' text={2021} />
          <ButtonFilter path='/shop/category/2022' text={2022} />
        </div>
        <ItemList items={products} />
      </section>
    </main>
  )
}

export { ItemListContainer }

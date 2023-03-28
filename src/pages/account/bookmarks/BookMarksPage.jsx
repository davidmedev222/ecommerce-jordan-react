import { useCart } from '../../../hooks/export'
import { Empty } from '@/components'
import { Products } from './Products'

const BookMarksPage = () => {
  const { bookmark } = useCart()

  return (
    <main>
      {bookmark.length > 0 ? <Products data={bookmark} /> : <Empty />}
    </main>
  )
}

export { BookMarksPage }

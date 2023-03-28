import { Empty } from '@/components'
import { useCart } from '@/hooks'
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

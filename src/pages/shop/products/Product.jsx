import { IconBookMark, IconBookMarkBold } from '@/components'
import { useCart } from '@/hooks'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const ProductStyled = styled('article')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(.5rem, 1rem, 2rem);
  position: relative;
`
const WrapperBookMark = styled('button')`
  width: clamp(1.25rem, 1.75vw, 3.5rem);
  height: clamp(1.25rem, 1.75vw, 3.5rem);
  position: absolute;
  top: 7%;
  right: 7%;
`
const ProductImage = styled('img')`
  aspect-ratio: 1;
  object-fit: contain;
  border-radius:clamp(1rem, 1vw, 2rem);
  background-color: #d1d0d6;
`
const ProductFooter = styled('footer')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap:clamp(0.25rem, 0.25vw, .5rem);
  text-align: center;
`
const ProductHeading = styled('h3')`
  text-transform: capitalize;
  font-size:clamp(1.25rem, 2vw, 4rem);
  font-weight: 800;
`
const ProductColor = styled('span')`
  text-transform: capitalize;
  font-size:clamp(.75rem, 1vw, 2rem);
`
const ProductPrice = styled('h4')`
  font-size:clamp(1rem, 1.75vw, 3.5rem);
  font-weight: 700;
`

const Product = ({ id, cp, image, name, color, price }) => {
  const { addBookmark, removeBookmark, isInBookmark } = useCart()

  const productForBookmark = { id, cp, image, name, color, price }

  const handleAddBookmark = () => {
    addBookmark({ ...productForBookmark, isBookmark: true })
    toast.success('Added To Bookmark')
  }

  const handleRemoveBookmark = () => {
    removeBookmark(id)
    toast.error('Removed From Bookmark')
  }

  return (
    <ProductStyled>
      <Link to={`/shop/product/${cp}`}>
        <ProductImage src={image} alt={name} />
      </Link>
      <WrapperBookMark>
        {isInBookmark(id)
          ? <IconBookMarkBold onClick={handleRemoveBookmark} />
          : <IconBookMark onClick={handleAddBookmark} />}
      </WrapperBookMark>
      <ProductFooter>
        <ProductHeading>{name}</ProductHeading>
        <ProductColor>{color}</ProductColor>
        <ProductPrice>${price}</ProductPrice>
      </ProductFooter>
    </ProductStyled>
  )
}

export { Product }

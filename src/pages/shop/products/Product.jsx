import styled from 'styled-components'
import { useToggle } from '../../../hooks/toggle/useToggle'
import { IconBookMark, IconBookMarkBold } from '../../../components/export'
import { useIntersection } from '../../../hooks/intersection/useIntersection'

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
  font-size:clamp(1.25rem, 2vw, 4rem);
  font-weight: 800;
`
const ProductColor = styled('span')`
  font-size:clamp(.75rem, 1vw, 2rem);
`
const ProductPrice = styled('h4')`
  font-size:clamp(1rem, 1.75vw, 3.5rem);
  font-weight: 700;
`

const Product = () => {
  const { isToggle, toggle } = useToggle()

  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.5
  }, true)

  return (
    <ProductStyled ref={elementRef} data-opacity data-view={isIntersecting}>
      <ProductImage data-mask={isIntersecting} src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1668792317/ecommerce-jordan-react/product-10_2_v8chjs.webp' alt='asd' />
      <WrapperBookMark onClick={toggle}>
        {isToggle ? <IconBookMarkBold /> : <IconBookMark />}
      </WrapperBookMark>
      <ProductFooter data-mask={isIntersecting}>
        <ProductHeading>One Multicolor</ProductHeading>
        <ProductColor>Grey / Black / White</ProductColor>
        <ProductPrice>$198.00</ProductPrice>
      </ProductFooter>
    </ProductStyled>
  )
}

export { Product }

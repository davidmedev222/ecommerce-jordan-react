import { useIntersection } from '@/hooks'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductStyled = styled('article')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(.5rem, 1rem, 2rem);
  position: relative;
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

const Product = ({ cp, image, name, color, price }) => {
  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.5
  }, true)

  return (
    <ProductStyled ref={elementRef} data-opacity data-view={isIntersecting}>
      <Link to={`/shop/product/${cp}`}>
        <ProductImage data-mask-left={isIntersecting} src={image} alt={name} />
      </Link>
      <ProductFooter data-mask-left={isIntersecting}>
        <ProductHeading>{name}</ProductHeading>
        <ProductColor>{color}</ProductColor>
        <ProductPrice>${price}</ProductPrice>
      </ProductFooter>
    </ProductStyled>

  )
}

export { Product }

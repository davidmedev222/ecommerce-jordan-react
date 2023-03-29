import { useCart, useIntersection } from '@/hooks'
import { ProductDetailFooter } from '@/pages/shop'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const ProductDetailStyled = styled('article')`
  display: grid;
  grid-template: 
  "image image" auto
  "header footer" auto
  / 1fr 1fr;
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);

 @media screen and (max-width: 49.75rem) {
    grid-template: 
    "image" auto
    "header" auto
    "footer" auto
    / 1fr;
    gap: 3rem;
 }
`
const ProductDetailImage = styled('img')`
  grid-area: image;
  height: clamp(17rem, 25vw, 50rem);
  object-fit: contain;
  aspect-ratio: 1;
`
const ProductDetailHeader = styled('header')`
  grid-area: header;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`
const ProductDetailHeading = styled('h2')`
  font-size: clamp(1rem, 1.5vw, 3rem);
  font-weight: 700;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;

  ${({ isTitle }) => isTitle && css`
    font-size: clamp(1.75rem, 2vw, 4rem);
    font-weight: 800;
  `}
`
const ProductDetailSpan = styled('span')`
  color: grey;
  font-size: clamp(1rem, 1.25vw, 2.5rem);
`
const ProductDetailLink = styled(Link)`
  color: white;
  font-size: clamp(1rem, 1.75vw, 3.5rem);
  font-weight: 700;
  text-align: center;
  border-radius: 3rem;
  background-color: black;
  padding: clamp(1rem, 1vw, 2rem) clamp(1.5rem, 3vw, 6rem);
  
 @media screen and (min-width: 49.75rem) {
    margin: auto;
 }
`
const ProductDetail = (props) => {
  const { id, cp, imageOne, imageTwo, name, color, stock, year, collection, location, designer, price } = props

  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.25
  }, false)

  const { isInCart } = useCart()

  const product = { id, cp, imageOne, imageTwo, name, color, stock, price }

  return (
    <ProductDetailStyled ref={elementRef} data-opacity data-view={isIntersecting}>
      <ProductDetailImage data-mask-top={isIntersecting} src={imageOne} alt={name} />
      <ProductDetailHeader>
        <ProductDetailHeading isTitle>{name} <ProductDetailSpan>{color}</ProductDetailSpan></ProductDetailHeading>
        <ProductDetailHeading as='h3'>Stock <ProductDetailSpan>{stock}</ProductDetailSpan></ProductDetailHeading>
        <ProductDetailHeading as='h4'>Category <ProductDetailSpan>{year}</ProductDetailSpan></ProductDetailHeading>
        <ProductDetailHeading as='h5'>Collection <ProductDetailSpan>{collection}</ProductDetailSpan></ProductDetailHeading>
        <ProductDetailHeading as='h6'>Location <ProductDetailSpan>{location}</ProductDetailSpan></ProductDetailHeading>
        <ProductDetailHeading as='h6'>Designer <ProductDetailSpan>{designer}</ProductDetailSpan></ProductDetailHeading>
      </ProductDetailHeader>
      {isInCart(id)
        ? <ProductDetailLink to='/cart'>Go to cart</ProductDetailLink>
        : <ProductDetailFooter product={product} stock={stock} price={price} />}
    </ProductDetailStyled>
  )
}

export { ProductDetail }

import styled, { css } from 'styled-components'
import { IconDecrease, IconIncrease } from '../../../components/export'
import { useIntersection } from '../../../hooks/intersection/useIntersection'

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
const ProductDetailFooter = styled('footer')`
  grid-area: footer;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: clamp(1rem, 1vw, 2rem);
  padding: 0 clamp(1rem, 5vw, 10rem);
`
const ProductDetailPrice = styled('h6')`
  font-size: clamp(1.75rem, 2.5vw, 5rem);
  font-weight: 700;
`
const ProductOptions = styled('footer')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
`
const ProductButton = styled('button')`
  width: clamp(2.5rem, 3.5vw, 7rem);
  height: clamp(2.5rem, 3.5vw, 7rem);
`
const ProductQuantity = styled('span')`
  font-size: clamp(1.5rem, 2.5vw, 5rem);
`
const ProductDetailButton = styled('button')`
  width: 100%;
  color: white;
  font-size: clamp(1rem, 1.75vw, 3.5rem);
  font-weight: 700;
  border-radius: 3rem;
  background-color: black;
  padding: clamp(1rem, 1vw, 2rem) clamp(1.5rem, 3vw, 6rem);
`

const ProductDetail = (props) => {
  const { imageOne, name, color, stock, year, collection, location, designer, price } = props

  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.25
  }, false)

  return (
    <ProductDetailStyled ref={elementRef} data-opacity data-view={isIntersecting}>
      <ProductDetailImage data-mask-top={isIntersecting} src={imageOne} alt={name} />
      <ProductDetailHeader>
        <ProductDetailHeading isTitle>{name} <ProductDetailSpan>{color}</ProductDetailSpan></ProductDetailHeading>
        <ProductDetailHeading>Stock <ProductDetailSpan>{stock}</ProductDetailSpan></ProductDetailHeading>
        <ProductDetailHeading>Category <ProductDetailSpan>{year}</ProductDetailSpan></ProductDetailHeading>
        <ProductDetailHeading>Collection <ProductDetailSpan>{collection}</ProductDetailSpan></ProductDetailHeading>
        <ProductDetailHeading>Location <ProductDetailSpan>{location}</ProductDetailSpan></ProductDetailHeading>
        <ProductDetailHeading>Designer <ProductDetailSpan>{designer}</ProductDetailSpan></ProductDetailHeading>
      </ProductDetailHeader>
      <ProductDetailFooter>
        <ProductDetailPrice>${price}</ProductDetailPrice>
        <ProductOptions>
          <ProductButton><IconDecrease /></ProductButton>
          <ProductQuantity>0</ProductQuantity>
          <ProductButton><IconIncrease /></ProductButton>
        </ProductOptions>
        <ProductDetailButton>Add to cart</ProductDetailButton>
      </ProductDetailFooter>
    </ProductDetailStyled>
  )
}

export { ProductDetail }

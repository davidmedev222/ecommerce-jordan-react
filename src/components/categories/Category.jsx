import { useIntersection } from '@/hooks'
import styled, { css } from 'styled-components'

const CategoryStyled = styled('article')`
  display: grid;
  place-items: center;
  grid-template: 
  "image header" auto
  / 1fr 1fr;
`
const CategoryImage = styled('img')`
  object-fit: contain;
  aspect-ratio: 1;
  transform: translateX(50%);
  transition: transform 800ms ease-in-out;
  z-index: 1;

  ${({ inView }) => inView && css`
    transform: translateX(0);
  `}
`
const CategoryHeader = styled('header')`
  grid-area: header;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  transform: translateX(-50%);
  transition: transform 800ms ease-in-out;
  visibility: hidden;
  
  ${({ inView }) => inView && css`
    transform: translateX(0);
    visibility: visible;
  `}
`
const CategoryYear = styled('span')`
  font-size: clamp(3.5rem, 7vw, 14rem);
  font-weight: 900;
  position: absolute;
  opacity: 0.15;
`
const CategoryHeading = styled('h3')`
  font-size: clamp(1.7rem, 3vw, 6rem);
  font-weight: 900;
  z-index: 1;
`
const CategoryParagraph = styled('p')`
  font-size: clamp(0.65rem, 1vw, 2rem);
  z-index: 1;
`
const Category = ({ image, alt, year, paragraph }) => {
  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.5
  }, true)

  return (
    <CategoryStyled ref={elementRef} data-opacity data-view={isIntersecting}>
      <CategoryImage inView={isIntersecting} src={image} alt={alt} />
      <CategoryHeader inView={isIntersecting}>
        <CategoryHeading>AIR JORDAN</CategoryHeading>
        <CategoryYear>{year}</CategoryYear>
        <CategoryParagraph>{paragraph}</CategoryParagraph>
      </CategoryHeader>
    </CategoryStyled>
  )
}

export { Category }

import { Category } from '@/components'
import styled from 'styled-components'

const SectionStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap:clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);

  @media screen and (max-width: 46.75rem) {
    grid-template-columns: 1fr;
 }
`
const Categories = () => {
  const data = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678385860/ecommerce-jordan-react/categories/category1_cvuztt.webp',
      alt: 'jordan modelo 2017',
      year: '2017',
      paragraph: 'Jordan Xxxii Pure Platinum Created In The Year 2020 With A Reinforced Material And With A Pleasant Feeling When Stepping On The Ground.'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678385859/ecommerce-jordan-react/categories/category3_jfzxkc.webp',
      alt: 'jordan modelo 2018',
      year: '2018',
      paragraph: 'Jordan Xxxvii Future Flight Created In The Year 2020 With A Reinforced Material And With A Pleasant Feeling When Stepping On The Ground.'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678385860/ecommerce-jordan-react/categories/category2_kdqpbo.webp',
      alt: 'jordan modelo 2019',
      year: '2019',
      paragraph: 'Jordan Xxxiv Blue Void Created In The Year 2020 With A Reinforced Material And With A Pleasant Feeling When Stepping On The Ground.'
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678385860/ecommerce-jordan-react/categories/category4_wlulox.webp',
      alt: 'jordan modelo 2020',
      year: '2020',
      paragraph: 'Jordan Xxxv Laser Crimson Created In The Year 2020 With A Reinforced Material And With A Pleasant Feeling When Stepping On The Ground.'
    }
  ]
  const categories = data.map((category) => {
    const { id, image, alt, year, paragraph } = category
    return <Category key={id} image={image} alt={alt} year={year} paragraph={paragraph} />
  })

  return (
    <SectionStyled>
      {categories.length > 0 ? categories : 'error while loading data'}
    </SectionStyled>
  )
}

export { Categories }

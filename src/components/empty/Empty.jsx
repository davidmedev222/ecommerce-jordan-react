import { IconCartEmpty } from '@/components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EmptyStyled = styled('section')`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(2rem, 2vw, 4rem);

  & svg {
    fill: black;
    width: clamp(7.5rem,15vw,30rem);
    height: clamp(7.5rem,15vw,30rem);
  }
`
const EmptyLink = styled(Link)`
  color: white;
  font-size: clamp(1rem, 1.75vw, 3.5rem);
  font-weight: 700;
  border-radius: 3rem;
  background-color: black;
  padding: clamp(1rem, 1vw, 2rem) clamp(1.5rem, 3vw, 6rem);
`

const Empty = () => {
  return (
    <EmptyStyled>
      <IconCartEmpty />
      <EmptyLink to='/shop'>Go to shop</EmptyLink>
    </EmptyStyled>
  )
}

export { Empty }

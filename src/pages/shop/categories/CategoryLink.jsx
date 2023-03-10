import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const CategoryStyled = styled(NavLink)`
  font-size:clamp(1rem, 1.25vw, 2.5rem);
  font-weight: 700;
  outline: 0.0625rem solid grey;
  padding: clamp(0.25rem, 0.25rem, 0.5rem) clamp(2rem, 2vw, 4rem);
  border-radius: clamp(3rem, 3vw, 6rem);

  &.active{
    color: white;
    background-color: black;
  }
`

const CategoryLink = ({ to, category }) => {
  return (
    <CategoryStyled to={to} end>{category}</CategoryStyled>
  )
}

export { CategoryLink }

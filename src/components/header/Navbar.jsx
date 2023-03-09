import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarStyled = styled('nav')`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`
const UlStyled = styled('ul')`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(3rem, 3vw, 6rem);
`

const LiStyled = styled('li')`
  font-size: clamp(.85rem,1vw,2rem);
  font-weight: 400;
`

const Navbar = () => {
  return (
    <NavbarStyled>
      <UlStyled>
        <LiStyled>
          <Link to='/shop'>Shop</Link>
        </LiStyled>
        <LiStyled>
          <Link to='/faqs'>Faqs</Link>
        </LiStyled>
        <LiStyled>
          <Link to='/cart'>Cart</Link>
        </LiStyled>
        <LiStyled>
          <Link to='/account'>Account</Link>
        </LiStyled>
      </UlStyled>
    </NavbarStyled>
  )
}

export { Navbar }

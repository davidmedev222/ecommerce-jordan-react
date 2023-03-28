import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const NavbarStyled = styled('nav')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

 @media screen and (max-width: 30rem) {
  width: 100%;
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: height 500ms, opacity 500ms ease-in-out;

  ${({ show }) => show && css`
   height: 17rem;
   opacity: 1;
  `}
 }
`
const UlStyled = styled('ul')`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(3rem, 3vw, 6rem);

 @media screen and (max-width: 30rem) {
   flex-direction: column;
 }
`
const LiStyled = styled('li')`
  font-size: clamp(1rem,1vw,2rem);

  @media screen and (min-width: 30rem) {
     :nth-child(3),:nth-child(4){
      display: none;
     }
  }
`

const Navbar = ({ toggle, offToggle }) => {
  return (
    <NavbarStyled show={toggle}>
      <UlStyled>
        <LiStyled onClick={offToggle}>
          <Link to='/shop'>Shop</Link>
        </LiStyled>
        <LiStyled onClick={offToggle}>
          <Link to='/faqs'>FAQs</Link>
        </LiStyled>
        <LiStyled onClick={offToggle}>
          <Link to='/cart'>Cart</Link>
        </LiStyled>
        <LiStyled onClick={offToggle}>
          <Link to='/account'>Account</Link>
        </LiStyled>
      </UlStyled>
    </NavbarStyled>
  )
}

export { Navbar }

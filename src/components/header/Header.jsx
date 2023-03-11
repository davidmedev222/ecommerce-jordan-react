import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconCart, IconLogo, IconMenu, IconUser } from '../export'
import { Navbar } from './Navbar'
import { useToggle } from '../../hooks/toggle/useToggle'

const HeaderStyled = styled('header')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding:clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`
const WrapperLogo = styled(Link)`
  width: clamp(3rem,4vw,8rem);
  height: clamp(3rem,4vw,8rem);
`
const WrapperIcons = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(3rem, 3vw, 6rem);
  
  @media screen and (max-width: 30rem) {
     display: none;
  }
`
const WrapperIcon = styled(Link)`
  width: clamp(2.5rem, 2.5vw, 5rem);
  height: clamp(2.5rem, 2.5vw, 5rem);
`
const WrapperMenu = styled('button')`
  display: none;
  width: clamp(2rem, 2.5vw, 5rem);
  height: clamp(2rem, 2.5vw, 5rem);

 @media screen and (max-width: 30rem) {
    display: block;
 }
`

const Header = () => {
  const { isToggle, toggle, offToggle } = useToggle()

  return (
    <HeaderStyled>
      <WrapperLogo to='/' onClick={offToggle}>
        <IconLogo />
      </WrapperLogo>
      <WrapperMenu onClick={toggle}>
        <IconMenu />
      </WrapperMenu>
      <Navbar toggle={isToggle} offToggle={offToggle} />
      <WrapperIcons>
        <WrapperIcon to='/cart'><IconCart /></WrapperIcon>
        <WrapperIcon to='/account'><IconUser /></WrapperIcon>
      </WrapperIcons>
    </HeaderStyled>
  )
}

export { Header }

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IconCart, IconLogo, IconUser } from '../export'
import { Navbar } from './Navbar'

const HeaderStyled = styled('header')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding:clamp(1rem, 1vw, 2rem) clamp(2rem, 4vw, 8rem);
`
const WrapperLogo = styled(Link)`
  width: clamp(4rem,4vw,8rem);
  height: clamp(4rem,4vw,8rem);
`
const WrapperIcons = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(3rem, 3vw, 6rem);
`
const WrapperIcon = styled(Link)`
  width: clamp(3rem, 3vw, 6rem);
  height: clamp(3rem, 3vw, 6rem);
`

const Header = () => {
  return (
    <HeaderStyled>
      <WrapperLogo to='/'>
        <IconLogo />
      </WrapperLogo>
      <Navbar />
      <WrapperIcons>
        <WrapperIcon to='/shop'><IconCart /></WrapperIcon>
        <WrapperIcon to='/account'><IconUser /></WrapperIcon>
      </WrapperIcons>
    </HeaderStyled>
  )
}

export { Header }

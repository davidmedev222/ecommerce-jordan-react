import { IconBell, IconBookMarkBold, IconCart, IconGift, IconInfo, IconMoon, IconSignOut, IconUser } from '@/components'
import { useAuth } from '@/hooks'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled, { css } from 'styled-components'

const PanelStyled = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
`
const PanelLink = styled(Link)`
  background-color: #d1d0d6;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
  font-size: clamp(1rem, 1vw, 2rem);
  border-radius: 3rem;
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 2vw, 4rem);

  & svg{
    fill: black;
    width: clamp(2.5rem, 2.5vw, 5rem);
    height: clamp(2.5rem, 2.5vw, 5rem);
  }

  ${({ signOut }) => signOut && css`
    color: white;
    background-color: #ff3232;

    & svg{
      fill: white;
    }
  `}
`

const Panel = () => {
  const { signOutUser } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOutUser()
      toast.info('Closed Session')
    } catch (error) {
      toast.error(error.code)
    }
  }

  return (
    <PanelStyled>
      <PanelLink to='profile'>
        <IconUser />
        My profile
      </PanelLink>
      <PanelLink to='orders'>
        <IconCart />
        My orders
      </PanelLink>
      <PanelLink to='bookmarks'>
        <IconBookMarkBold />
        My bookmarks
      </PanelLink>
      <PanelLink to='gifts'>
        <IconGift />
        Gifts
      </PanelLink>
      <PanelLink to='/faqs'>
        <IconInfo />
        FAQs
      </PanelLink>
      <PanelLink as='button'>
        <IconMoon />
        Dark mode
      </PanelLink>
      <PanelLink as='button'>
        <IconBell />
        Notifications
      </PanelLink>
      <PanelLink onClick={handleSignOut} as='button' signOut>
        <IconSignOut />
        Sign out
      </PanelLink>
    </PanelStyled>
  )
}

export { Panel }

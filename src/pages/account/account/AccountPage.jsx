
import { Panel, UserCard } from '@/pages/account'
import styled from 'styled-components'

const MainStyled = styled('main')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`

const AccountPage = () => {
  return (
    <MainStyled>
      <UserCard />
      <Panel />
    </MainStyled>
  )
}

export { AccountPage }

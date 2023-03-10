import styled from 'styled-components'
import { SignUp } from './SignUp'

const MainStyled = styled('main')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`

const RegisterPage = () => {
  return (
    <MainStyled>
      <SignUp />
    </MainStyled>
  )
}

export { RegisterPage }

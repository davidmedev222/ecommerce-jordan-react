import { SignIn, SignInWithSocials } from '@/pages/login'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainStyled = styled('main')`
  display: grid;
  place-content: center;
  grid-template: 
  "left right" auto
  / 1fr 1fr;
  gap: clamp(2rem, 4vw, 8rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);

 @media screen and (max-width: 64rem) {
    grid-template: 
    "left" auto
    "right" auto
    / 1fr;
 }
@media screen and (min-width: 222rem) {
   grid-template: 
   "left" auto
   "right" auto
   / 1fr;
}
`
const WrapperLoginLeft = styled('div')`
  grid-area: left;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`
const WrapperLoginRight = styled('section')`
  grid-area: right;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(.5rem, .5vw, 1rem);
  font-size: clamp(1rem, 1vw, 2rem);
  text-align: center;
`
const Heading = styled('h2')`
  font-size:clamp(1.75rem, 1.75vw, 3.5rem);
  font-weight: 700;
`
const TermsOfUse = styled('p')`
  font-size:clamp(.75rem, .75vw, 1.5rem);
`
const LinkStyled = styled(Link)`
  font-weight: 700;
  text-decoration: underline;
`

const LoginPage = () => {
  return (
    <MainStyled>
      <WrapperLoginLeft>
        <SignIn />
      </WrapperLoginLeft>
      <WrapperLoginRight>
        <Heading>Welcome to Jordan Shop</Heading>
        <span>Choose how you want to continue setting up your account</span>
        <SignInWithSocials />
        <p>You do not have an account?
          <LinkStyled to='/register'> Create new account</LinkStyled>
        </p>
        <TermsOfUse>By clicking on the button, you accept the
          <LinkStyled to='#'> Terms of Use </LinkStyled>and the<LinkStyled to='#'> Privacy Policy </LinkStyled>
          and also confirms that he is 18 years of age or older.
        </TermsOfUse>
      </WrapperLoginRight>
    </MainStyled>
  )
}

export { LoginPage }

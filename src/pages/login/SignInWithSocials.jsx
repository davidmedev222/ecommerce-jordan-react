import { IconGithub, IconGoogle, IconTwitter } from '@/components'
import { useAuth } from '@/hooks'
import { createUser } from '@/services/firestore'
import { toast } from 'react-toastify'
import styled, { css } from 'styled-components'

const SignInWithSocialsUl = styled('ul')`
  width: 100%;
`
const SignInWithSocialsLi = styled('li')`
  margin: clamp(1rem, 1vw, 2rem) 0 ;
  `
const SignInWithSocialsButton = styled('button')`
  font-size: clamp(0.875rem, .875vw, 1.75rem);
  font-weight: 800;
  width: 100%;
  border-radius: 3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1.5rem, 3vw, 6rem);

  & svg, img {
    fill: white;
    width: clamp(1.5rem, 2vw, 4rem);
    height: clamp(1.5rem, 2vw, 4rem);
  }
  
  ${({ google }) => google && css`
    background-color: #d1d0d6;
  `}
  ${({ github }) => github && css`
    color: white;
    background-color: #191717;
  `}
  ${({ twitter }) => twitter && css`
    background-color: #55acee;
  `}
`
const SignInWithSocials = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth()

  const handleSignInWithGoogle = async () => {
    try {
      const { user } = await signInWithGoogle()
      await createUser(user)
      toast.success(`Welcome ${user.displayName}`)
    } catch (error) {
      toast.error(error.code)
    }
  }

  const handleSignInWithgithub = async () => {
    try {
      const { user } = await signInWithGithub()
      await createUser(user)
      toast.success(`Welcome ${user.displayName}`)
    } catch (error) {
      toast.error(error.code)
    }
  }

  return (
    <SignInWithSocialsUl>
      <SignInWithSocialsLi>
        <SignInWithSocialsButton twitter>
          <IconTwitter />
          Continue with Twitter
        </SignInWithSocialsButton>
      </SignInWithSocialsLi>
      <SignInWithSocialsLi onClick={handleSignInWithgithub}>
        <SignInWithSocialsButton github>
          <IconGithub />
          Continue with Github
        </SignInWithSocialsButton>
      </SignInWithSocialsLi>
      <SignInWithSocialsLi onClick={handleSignInWithGoogle}>
        <SignInWithSocialsButton google>
          <IconGoogle />
          Continue with Google
        </SignInWithSocialsButton>
      </SignInWithSocialsLi>
    </SignInWithSocialsUl>
  )
}

export { SignInWithSocials }

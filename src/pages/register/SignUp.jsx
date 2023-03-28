import { useAuth } from '@/hooks'
import { createUser } from '@/services/firestore'
import { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const FormStyled = styled('form')`
  width: 100%;
  display: grid;
  grid-template: 
  "formleft formright" auto
  "submit submit" auto
  / 1fr 1fr;
  gap: clamp(1rem, 3vw, 6rem);
  font-size: clamp(1rem, 1vw, 2rem);
  
  @media screen and (max-width: 49.75rem) {
     grid-template: 
     "formleft" auto
     "formright" auto
     "submit" auto
     / 1fr;
  }
 @media screen and (min-width: 222rem) {
    grid-template: 
    "formleft" auto
    "formright" auto
    "submit" auto
    / 1fr;
 }
`
const LabelStyled = styled('label')`
  font-weight: 700;
`
const InputStyled = styled('input')`
  width: 100%;
  border-radius:clamp(1rem, 1vw, 2rem);
  background-color: #d1d0d6;
  padding:  clamp(.5rem, .5vw, 1rem);
  outline: none;
`
const WrapperFormLeft = styled('div')`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 1vw, 2rem);
`
const WrapperFormRight = styled('div')`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 1vw, 2rem);
`
const Submit = styled('button')`
  grid-area: submit;
  color: white;
  font-weight: 700;
  border-radius: 3rem;
  background-color: black;
  padding: clamp(1rem, 1vw, 2rem) clamp(1.5rem, 3vw, 6rem);
  margin: clamp(1rem, 1vw, 2rem) 0;
`

const SignUp = () => {
  const [formData, updateFormData] = useState({
    username: '',
    photoURL: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678815873/ecommerce-jordan-react/user/user-anonimo_fy6t5p.png',
    email: '',
    password: ''
  })

  const { signUp, updateProfileUser } = useAuth()

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    try {
      const { user } = await signUp(formData)
      await updateProfileUser(formData)
      await createUser(user)
      toast.success(`Welcome ${user.displayName}`)
    } catch (error) {
      toast.error(error.code)
    }
  }

  const handleOnInputChange = (ev) => {
    updateFormData((prevFormData) => {
      return {
        ...prevFormData,
        [ev.target.name]: ev.target.value
      }
    })
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <WrapperFormLeft>
        <LabelStyled htmlFor='username'>Username</LabelStyled>
        <InputStyled onChange={handleOnInputChange} value={formData.username} id='username' name='username' placeholder='Username' required maxLength={25} />
        <LabelStyled htmlFor='photoURL'>Photo URL </LabelStyled>
        <InputStyled type='url' onChange={handleOnInputChange} value={formData.photoURL} id='photoURL' name='photoURL' readOnly />
      </WrapperFormLeft>
      <WrapperFormRight>
        <LabelStyled htmlFor='email'>Email</LabelStyled>
        <InputStyled onChange={handleOnInputChange} value={formData.email} id='email' name='email' type='email' placeholder='Email' required maxLength={45} />
        <LabelStyled htmlFor='password'>Password</LabelStyled>
        <InputStyled onChange={handleOnInputChange} value={formData.password} id='password' name='password' type='password' placeholder='Password' required />
      </WrapperFormRight>
      <Submit type='submit'>Sign Up</Submit>
    </FormStyled>
  )
}

export { SignUp }

import { useAuth } from '@/hooks'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const FormStyled = styled('form')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(1rem, 1vw, 2rem);
  font-size: clamp(1rem, 1vw, 2rem);
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
const ForgotLink = styled(Link)`
  color: #006FCF;
  text-align: center;
  text-decoration: underline;
`
const Submit = styled('button')`
  width: 100%;
  color: white;
  font-weight: 700;
  border-radius: 3rem;
  background-color: black;
  padding: clamp(1rem, 1vw, 2rem) clamp(1.5rem, 3vw, 6rem);
  margin: clamp(1rem, 1vw, 2rem) 0;
`

const SignIn = () => {
  const [formData, updateFormData] = useState({
    email: '',
    password: ''
  })

  const { signIn } = useAuth()

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    try {
      const { user } = await signIn(formData)
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
      <LabelStyled htmlFor='email'>Email</LabelStyled>
      <InputStyled onChange={handleOnInputChange} value={formData.email} id='email' name='email' type='email' placeholder='Email' required />
      <LabelStyled htmlFor='password'>Password</LabelStyled>
      <InputStyled onChange={handleOnInputChange} value={formData.password} id='password' name='password' type='password' placeholder='Password' required />
      <Submit type='submit'>Sign In</Submit>
      <ForgotLink to='recoverypassword'>Forgot your password?</ForgotLink>
    </FormStyled>
  )
}

export { SignIn }

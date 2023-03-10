import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FormStyled = styled('form')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
`
const LabelStyled = styled('label')`
  align-self: flex-start;
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

  const handleOnInputChange = (ev) => {
    updateFormData((prevFormData) => {
      return {
        ...prevFormData,
        [ev.target.name]: ev.target.value
      }
    })
  }

  return (
    <FormStyled>
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

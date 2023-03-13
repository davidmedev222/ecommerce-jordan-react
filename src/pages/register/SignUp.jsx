import styled from 'styled-components'
import { useState } from 'react'
import { useAuth } from '../../hooks/export'

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
    firstName: '',
    lastName: '',
    username: '',
    address: '',
    email: '',
    password: ''
  })

  const { signUp } = useAuth()

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    try {
      const userCredential = await signUp(formData)
      console.log(userCredential)
    } catch (error) {
      window.alert(error.message)
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
        <LabelStyled htmlFor='firstName'>First name</LabelStyled>
        <InputStyled onChange={handleOnInputChange} value={formData.firstName} id='firstName' name='firstName' placeholder='First name' required />
        <LabelStyled htmlFor='lastName'>Last name</LabelStyled>
        <InputStyled onChange={handleOnInputChange} value={formData.lastName} id='lastName' name='lastName' placeholder='Last name' required />
        <LabelStyled htmlFor='username'>Username</LabelStyled>
        <InputStyled onChange={handleOnInputChange} value={formData.username} id='username' name='username' placeholder='Username' required />
      </WrapperFormLeft>
      <WrapperFormRight>
        <LabelStyled htmlFor='address'>Address</LabelStyled>
        <InputStyled
          onChange={handleOnInputChange} value={formData.address} id='address'
          name='address' placeholder='Address' required
        />
        <LabelStyled htmlFor='email'>Email</LabelStyled>
        <InputStyled onChange={handleOnInputChange} value={formData.email} id='email' name='email' type='email' placeholder='Email' required />
        <LabelStyled htmlFor='password'>Password</LabelStyled>
        <InputStyled onChange={handleOnInputChange} value={formData.password} id='password' name='password' type='password' placeholder='Password' required />
      </WrapperFormRight>
      <Submit type='submit'>Sign Up</Submit>
    </FormStyled>
  )
}

export { SignUp }

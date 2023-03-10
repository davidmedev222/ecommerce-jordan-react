import { Link } from 'react-router-dom' // ROUTER DOM & HOOK
import { useState } from 'react' // HOOKS

const RegisterPage = () => {
  const [registerData, updateRegisterData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleOnChange = (ev) => {
    updateRegisterData((prevRegisterData) => {
      return {
        ...prevRegisterData,
        [ev.target.name]: ev.target.value
      }
    })
  } // EVENT

  return (
    <div className='register-container'>

      <section className='register'>
        {/* TITLE */}
        <h1 className='register-h1'>jordan shop</h1>
        {/* INFO */}
        <span className='register-span'>Fill in the form with your data to create a new account.</span>
        {/* FORM */}
        <form className='register-form'>
          <label htmlFor='name' className='register-label'>
            User Name
            <input
              value={registerData.name}
              onChange={handleOnChange}
              className='register-input'
              type='text'
              name='name'
              id='name'
              required
              minLength={3}
              maxLength={30}
              autoComplete='off'
            />
          </label>
          <label htmlFor='email' className='register-label'>
            Email
            <input
              value={registerData.email}
              onChange={handleOnChange}
              className='register-input'
              type='email'
              name='email'
              id='email'
              required
              minLength={5}
              maxLength={50}
              autoComplete='off'
            />
          </label>
          <label htmlFor='password' className='register-label'>
            Password
            <input
              value={registerData.password}
              onChange={handleOnChange}
              className='register-input'
              type='password'
              name='password'
              id='password'
              required
              minLength={5}
              maxLength={30}
              autoComplete='off'
            />
          </label>
          {/* BUTTON */}
          <button type='sumbit' className='btn register-btn'>
            CreateAccount
          </button>
        </form>
        {/* DETAILS */}
        <p className='register-p'>
          By clicking on the button, you accept the{' '}
          <Link to='#' className='register-a'>
            Terms of Use
          </Link>{' '}
          and the{' '}
          <Link to='#' className='register-a'>
            Privacy Policy
          </Link>{' '}
          and also confirms that he is 18 years of age or older.
        </p>
      </section>
    </div>
  )
}

export { RegisterPage }

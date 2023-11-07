import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import ResetForm from './ResetForm'
import OtpForm from './OtpForm'

const Template = ({heading,heading1,formtype,image ,children}) => {
  return (
    <div className='template-container'>
         <div className='main-content'>
             <div> <h1>{heading}</h1></div>
             <div>{heading1}</div>
             {/* {formtype ==='login'?
        (<LoginForm  />):
        (<SignupForm  />)} */}

{formtype === 'login' ? (
        <LoginForm/>
      ) : formtype === 'signup' ? (
       <SignupForm/>
      ) : formtype === 'reset' ? (
        <ResetForm/>
      ) : (
        <OtpForm/>
      )}

          <div>
      <p>OR</p>
      <button><p>Sign in with Google</p></button>
          </div>
      </div>

     <div className='img-container'>

       <img src={image} alt="image"  width={558} height={584} loading='lazy' />

     </div>

    </div>
  )
}

export default Template

import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({heading,heading1,formtype,image}) => {
  return (
    <div className='template-container'>
         <div className='main-content'>
             <div> <h1>{heading}</h1></div>
             <div>{heading1}</div>
             {formtype ==='login'?
        (<LoginForm  />):
        (<SignupForm  />)}

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

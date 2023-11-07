import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import ResetForm from './ResetForm'
import OtpForm from './OtpForm'
 import './Template.css'

const Template = ({heading,heading1,formtype,image ,children}) => {
  return (
    <div className='template-container flex  bg-[#E5E5E7] h-screen w-screen py-12 mx-auto gap-y-0 gap-x-12'>

    
     <div className='img-container flex flex-col items-center justify-evenly bg-[#1D7A85] min-h-[44rem] min-w-[49rem]
     rounded-2xl mx-2 -my-6'>
     <div className='image-heading'><h1 className='text-[#fff]'>EduVerse</h1></div>
 <div><img src={image} alt="image"  width={558} height={584} loading='lazy' /></div>

</div>
         <div className='main-content flex flex-col space-x-4 gap-8  '>
         
           <h1 className='heading '>{heading}</h1>
            <p className='heading1'>{heading1}</p>
          
        <div className='form-container '>
         {formtype === 'login' ? (
        <LoginForm/>
      ) : formtype === 'signup' ? (
       <SignupForm/>
      ) : formtype === 'reset' ? (
        <ResetForm/>
      ) : (
        <OtpForm/>
      )}  
    </div>
        <div className='button-container'>
          <div></div>
      <p className='para-container'>OR</p>
      <div></div>
      <button className='google-container'><p>Sign in with Google</p></button>
          </div> 
           
      </div>

    </div>
  )
}

export default Template

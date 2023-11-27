import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import ResetForm from './ResetForm'
import OtpForm from './OtpForm'
import btn from '../assets/Group 2.png'
 import './Template.css'
 import { GoogleOAuthProvider } from '@react-oauth/google'
 import { GoogleLogin } from '@react-oauth/google';
 import { useHistory } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'


const Template = ({heading,heading1,formtype,image ,children}) => {

  const navigate =useNavigate();
  const { login } = useAuth();
  return (
    <div className='template-container flex  bg-[#E5E5E7] h-screen w-screen py-12  gap-y-0 gap-x-12'>

    
     <div className='img-container flex flex-col items-center justify-evenly bg-[#1D7A85]  min-h-[45rem] min-w-[49rem]
     rounded-2xl mx-2 -my-10'>
     <div className='image-heading'><h1 className='text-[#fff]'>EduVerse</h1></div>
 <div className='image'><img src={image} alt="image"  width={558} height={584} loading='lazy' /></div>

</div>
         <div className='main-content flex flex-col space-x-4 gap-8 mx-[9.765625vw] '>
         <p className='heading1'>{heading1}</p>
           <h1 className='heading'>{heading}</h1>
           
          
        <div className='form-container'>
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
        <div className='button-container '>
       
      <p className='para-container font-bold'>OR</p>
      <div >
     
        <GoogleOAuthProvider clientId="197140301378-d983fr88pf7jq9uo5bqml6v0qcjm2g58.apps.googleusercontent.com">
        <GoogleLogin
             onSuccess={credentialResponse => {
              login();
                navigate("/home");
             }}
             onError={() => {
               console.log('Login Failed');
             }}
            />;
          
          
          
          
          </GoogleOAuthProvider>;
        
        
        </div>
          </div> 
           
      </div>

    </div>
  )
}

export default Template

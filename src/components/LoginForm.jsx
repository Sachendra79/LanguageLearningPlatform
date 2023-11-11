import React from 'react'
import SwitchableForm from './SwitchableForm';
import { useState  } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import ResetForm from './ResetForm'
import './LoginForm.css';


const LoginForm = () => {

    const[formData,setFormData]=useState({name:"" ,password:""})
    const navigate=useNavigate();
    const [formtype , setFormType]=useState("");

    function changeHandler(event)
    {
        setFormData((prevData) =>
        (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(event)
    {
  event.preventDefault();
  toast.success("Enter Otp To Sign In");
    }

  return (
    <div className='login-container '>

        <div className='btn flex ml-20 '>
        <button className='login-btn'>Login</button>
        <button className='signup-btn' onClick={()=>(navigate("/signup"))}>Signup</button>
      </div>
        <form onSubmit={submitHandler}>
    
      <div className="container my-8">
      
      <div className="input-group  ">
       
        <input
          type="text"
          value={formData.name}
          name='name'
          onChange={changeHandler}
          placeholder="Enter username"
          className='input'
        />
      </div>
      <div className="input-group">
        
        <input
          type="password"
          value={formData.password}
          name='password'
          onChange={changeHandler}
          placeholder="Enter password"
          className='input'
        />
      </div>
      <div className='link'>
        <Link to='/reset' >Forgot Password?</Link>
      </div>
      <button className='main-button' >Sign in</button> 
    </div>
   
        
    </form>


    </div>
  )
}

export default LoginForm

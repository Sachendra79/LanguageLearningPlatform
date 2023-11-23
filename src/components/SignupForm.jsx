import React from 'react'
import { useState  } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import ReactLoading from 'react-loading'
const SignupForm = () => {
    const[formData,setFormData]=useState({name:"" ,password:"",email:""})
    const navigate=useNavigate();
    const[loading ,setLoading]=useState(false);

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
  toast.success("Journey Begin");
  setLoading(true)

    }


  return (
    <div>
       <div className='btn flex ml-20 mb-4'>
        <button className='login-btn' onClick={()=>(navigate("/"))}>Login</button>
        <button className='signup-btn ' >Signup</button>
      </div>
      <form onSubmit={submitHandler}>
    
    <div className="container">
    
    <div className="input-group">
    
      <input
        type="text"
        value={formData.name}
        name='name'
        onChange={changeHandler}
        placeholder="Enter your name"
        className='input '
      />
    </div>
    <div className="input-group">
     
      <input
        type="email"
        value={formData.email}
        name='email'
        onChange={changeHandler}
        placeholder="Enter your email"
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
   
    <button className='main-button' >
    { loading ? <ReactLoading type='bubbles'color="#fff" height={60} width={60} className='loader' /> : "Start Learning"}</button> 
  </div>
 
      
  </form>

    </div>
  )
}

export default SignupForm

import React from 'react'
import { useState  } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import ReactLoading from 'react-loading'
const SignupForm = () => {
    const[formData,setFormData]=useState({name:"" ,password:"",email:""})
    const navigate=useNavigate();
    const[loading ,setLoading]=useState(false);
    const [errors, setErrors]=useState({name:"" ,password:"",email:""})
 
    function validateInput (name, value)  {
      const errorsCopy = { ...errors };
      const usernameRegex = /^[A-Za-z]{4,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const stNumberRegex = /^.{6,}$/; 
   
  
    if(name === 'name')
    {
      errorsCopy.name = usernameRegex.test(value) ? '' : 'Username must contain alphabet only';
    }
    
      if(name=== 'email')
     {
      errorsCopy.email = emailRegex.test(value) ? '': 'Invalid email format';
     }
     
       if(name === 'password')
       {
          errorsCopy.password = stNumberRegex.test(value) ? '': 'Password must be at least 7 characters.';
       }
       
      setErrors(errorsCopy);
    };


    function changeHandler(event)
    { const { name, value } = event.target;
        setFormData((prevData) =>
        (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
        validateInput(name, value);
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
         <div className='error-message'>{errors.name}</div>
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
         <div className='error-message'>{errors.email}</div>
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
         <div className='error-message'>{errors.password}</div>
    </div>
   
    <button className='main-button' >
    { loading ? <ReactLoading type='bubbles'color="#fff" height={60} width={60} className='loader' /> : "Start Learning"}</button> 
  </div>
 
      
  </form>

    </div>
  )
}

export default SignupForm

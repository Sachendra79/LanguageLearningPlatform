import React from 'react'
import { useState  } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const LoginForm = () => {

    const[formData,setFormData]=useState({name:"" ,password:""})
    const navigate=useNavigate();

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
    <div>

        <div>
        <button>Login</button>
        <button onClick={()=>(navigate("/signup"))}>Signup</button>
      </div>
        <form onSubmit={submitHandler}>
    
      <div className="container">
      
      <div className="input-group">
        <label>Username</label>
        <input
          type="text"
          value={formData.name}
          name='name'
          onChange={changeHandler}
          placeholder="Enter username"
        />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          value={formData.password}
          name='password'
          onChange={changeHandler}
          placeholder="Enter password"
        />
      </div>
      <div>
        <Link to='/reset'>Forgot Password?</Link>
      </div>
      <button >Sign in</button> 
    </div>
   
        
    </form>

    </div>
  )
}

export default LoginForm

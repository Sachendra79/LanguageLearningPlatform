import React from 'react'
import { useState  } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
const ResetForm = () => {

  const[formData,setFormData]=useState({cnfpassword:"" ,password:""})
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
       <form onSubmit={submitHandler}>
    
    <div className="container">
    
    <div className="input-group">
      
      <input
        type="password"
        value={formData.password}
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

export default ResetForm

import React from 'react'
import { useState  } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
const ResetForm = () => {

  const[formData,setFormData]=useState({cnfpassword:"" ,password:"",otp:""})
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
  toast.success("Please Login");
    }
    function clickHandler(event)
    {
      toast.success("Please Login")
      navigate("/")
    }
  return (
    <div>
       <form onSubmit={submitHandler}>
    
    <div className="container">
    
    <div className="input-group">
      
      <input
        type="password"
        value={formData.password}
        name='password'
        onChange={changeHandler}
        placeholder="Password"
        className='input'
      />
    </div>
    <div className="input-group">
     
      <input
        type="password"
        value={formData.cnfpassword}
        name='cnfpassword'
        onChange={changeHandler}
        placeholder="Re-type Password"
        className='input'
      />
    </div>
    <div className="input-group">
     
      <input
        type="text"
        value={formData.otp}
        name='otp'
        onChange={changeHandler}
        placeholder="Enter Otp "
        className='input'
      />
    </div>

    <button  className='main-button'
      onClick=
     {clickHandler} >Continue</button> 
  </div>
 
      
  </form>


    </div>
  )
}

export default ResetForm

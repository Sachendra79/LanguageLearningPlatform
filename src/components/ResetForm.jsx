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
      />
    </div>
    <div className="input-group">
     
      <input
        type="password"
        value={formData.cnfpassword}
        name='cnfpassword'
        onChange={changeHandler}
        placeholder="Re-type Password"
      />
    </div>
    <div className="input-group">
     
      <input
        type="text"
        value={formData.otp}
        name='otp'
        onChange={changeHandler}
        placeholder="Enter Otp "
      />
    </div>

    <button 
      onClick={()=> ( navigate("/"))}  >Continue</button> 
  </div>
 
      
  </form>


    </div>
  )
}

export default ResetForm

import React from 'react'
import { useState  } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
const ResetForm = () => {

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
      
    </div>
  )
}

export default ResetForm

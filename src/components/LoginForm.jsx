import React from 'react'
import { useState  } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import ResetForm from './ResetForm'
import ReactLoading from "react-loading"

const LoginForm = () => {

    const[formData,setFormData]=useState({name:"" ,password:""})
    const navigate=useNavigate();
    const[loading ,setLoading]=useState(false);
    const [formtype , setFormType]=useState("");
    const [errors, setErrors] = useState({ name: '',password: '' });
 
    function validateInput (name, value)  {
      const errorsCopy = { ...errors };
      const usernameRegex = /^[A-Za-z]{4,}$/;
      const passwordrgx = /^.{6,}$/; 
     
  
    if(name === 'name')
    {
      errorsCopy.name = usernameRegex.test(value) ? '' : 'Username does not match';
    }
    
     
       if(name === 'password')
       {
          errorsCopy.password = passwordrgx.test(value) ? '': 'Password must be at least 7 characters.';
       }
       
      setErrors(errorsCopy);
    };

    function changeHandler(event)
    {
       const {name,value} =event.target;
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
    setLoading(true);
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
         <div className='error-message'>{errors.name}</div>
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
      <div className='link'>
        <Link to='/reset' >Forgot Password?</Link>
      </div>
      <button className='main-button' >
        { loading ? <ReactLoading type='bubbles'color="#fff" height={60} width={60} className='loader' /> : "Sign In"}
        </button> 
    </div>
   
        
    </form>

    </div>
  )
}

export default LoginForm

import React from 'react'
import { useState ,useRef } from 'react';
import toast from 'react-hot-toast';
import OTPInput from 'react-otp-input';

const OtpForm = () => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // const handleInputChange = (e, index) => {
  //   const value = e.target.value;

  //   if (/^[1-9]$/.test(value) || value === '') {
  //     const newOTP = [...otp];
  //     newOTP[index] = value;
  //     setOTP(newOTP);

  //     if (value !== '' && index < 3) {
  //       inputRefs[index + 1].current.focus();
  //     }
  //   }
  // };
  function submitHandler(event)
    {
  event.preventDefault();
  toast.success("Please Login");
    }

  return (
    <div>
      
      <div className='otp-container'>
      <h1>OTP Login</h1>
      <form onSubmit={submitHandler}>
        
       <div className="middle">
        <div className="wrapper">
            <OTPInput
              value={otp}
              onChange={setOTP}
              numInputs={4}
              renderSeparator={<span></span>}
              renderInput={(props)=><input {...props}/>}
              />
        </div>
        <div><p className="otp-text">Didn't receive code ?</p></div>
        <div><a href="#">Resend Code</a></div>
      </div>

        <div><button>Start Learning</button></div>
      </form>
    </div>
    </div>
  )
}

export default OtpForm

import React from 'react'
import { useState ,useRef } from 'react';
import toast from 'react-hot-toast';

const OtpForm = () => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (/^[1-9]$/.test(value) || value === '') {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      if (value !== '' && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };
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
        <input
          type="text"
          maxLength={1}
          value={otp[0]}
          onChange={(e) => handleInputChange(e, 0)}
          ref={inputRefs[0]}
        />
        <input
          type="text"
          maxLength={1}
          value={otp[1]}
          onChange={(e) => handleInputChange(e, 1)}
          ref={inputRefs[1]}
        />
        <input
          type="text"
          maxLength={1}
          value={otp[2]}
          onChange={(e) => handleInputChange(e, 2)}
          ref={inputRefs[2]}
        />
        <input
          type="text"
          maxLength={1}
          value={otp[3]}
          onChange={(e) => handleInputChange(e, 3)}
          ref={inputRefs[3]}
        />

        <div><button>Start Learning</button></div>
      </form>
    </div>
    </div>
  )
}

export default OtpForm

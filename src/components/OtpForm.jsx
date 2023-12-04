import React from 'react'
import { useState ,useRef } from 'react';
import toast from 'react-hot-toast';
import OTPInput from 'react-otp-input';
import ReactLoading from 'react-loading';

const OtpForm = () => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const[loading ,setLoading]=useState(false);

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
  setLoading(true);
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
        <div><p className="focus:text-black  text-black">Didn't receive code ?</p></div>
        <div><button className='otp-button text-[#fff] bg-slate-500 w-20 rounded-md'>Resend</button></div>
      </div>

        <div><button className='main-button'>
        { loading ? <ReactLoading type='bubbles'color="#fff" height={60} width={60} className='loader' /> : "Verify Otp"} </button></div>
      </form>
    </div>
    </div>
  )
}

export default OtpForm

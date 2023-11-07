import React from 'react'
import mainimg from '../assets/Group(1).png'
import Template from '../components/Template'
const Otp = () => {
  return (
    <Template 
  heading="Create Your Account"
  heading1="Hello"
  formtype="otp"
  image={mainimg}
  children={Otp}
  />
  )
}

export default Otp

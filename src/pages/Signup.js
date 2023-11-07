import React from 'react'
import img from '../assets/Group.png'
import Template from '../components/Template'
const Signup = () => {
  return (
    <Template 
    heading="Create your account"
    heading1="Hello"
    formtype="signup"
    image={img}
    children={Signup}
    />
  )
}

export default Signup

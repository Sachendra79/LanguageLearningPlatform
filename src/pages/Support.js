import React from 'react'
import Sidebar from '../components/Sidebar'
import Home from './bekar'
import Header from '../components/Header'
import { useState } from 'react'
import "../App.css"
import ChatBot from "react-simple-chatbot"
import { Segment } from 'semantic-ui-react'

const Support = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
    
  const steps = [
    {
      id: 'sachin',
      message: 'Hello, welcome to the Support Section. How can I assist you today?',
      trigger: 'askName',
    },
    {
      id: 'askName',
      message: 'Please enter your name.',
      trigger: 'waiting',
    },
    {
      id: 'waiting',
      user: true,
      trigger: 'greetUser',
    },
    {
      id: 'greetUser',
      message: 'Hi {previousValue}! How can I help you?',
      trigger: 'selectCategory',
    },
    {
      id: 'selectCategory',
      message: 'Please select a category for your issue:',
      trigger: 'categories',
    },
    {
      id: 'categories',
      options: [
        { value: 'technical', label: 'Technical', trigger: 'technicalIssue' },
        { value: 'courses', label: 'Courses', trigger: 'coursesIssue' },
        { value: 'billing', label: 'Billing', trigger: 'billingIssue' },
        { value: 'account', label: 'Account', trigger: 'accountIssue' },
        { value: 'others', label: 'Others', trigger: 'otherIssue' },
      ],
    },
    {
      id: 'technicalIssue',
      message: 'For technical issues, please contact our support team at support@example.com',
      end: true,
    },
    {
      id: 'coursesIssue',
      message: 'If you are facing issues with courses, please check our knowledge base or contact us at courses@example.com',
      end: true,
    },
    {
      id: 'billingIssue',
      message: 'For billing inquiries, please reach out to billing@example.com',
      end: true,
    },
    {
      id: 'accountIssue',
      message: 'If you have account-related issues, please contact accounts@example.com',
      end: true,
    },
    {
      id: 'otherIssue',
      message: 'For other inquiries, please reach out to info@example.com',
      end: true,
    },
    {
      id: 'additionalHelp',
      message: 'Is there anything else I can help you with?',
      trigger: 'additionalHelpOptions',
    },
    {
      id: 'additionalHelpOptions',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'selectCategory' },
        { value: 'no', label: 'No', end: true },
      ],
    },
  ];
  





  return (
    <div className='main-container grid-container'>
      <div className='sidebar'>  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/></div>
      <div className='right-side' >
             <div className='header'> <Header OpenSidebar={OpenSidebar}/></div>
             <div className='content '>
                  <div className='chatbot m-auto '>
                         <ChatBot steps={steps}  />

                  </div>
             </div>

      </div>
    </div>
  )
}

export default Support

// SwitchableForm.jsx

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './SwitchableForm.css'; 

const SwitchableForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSwitch = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="switchable-form-container">
      <div className={`slider ${isLoginForm ? 'left' : 'right'}`} />
      <button className={`switch-button ${isLoginForm ? 'left' : 'right'}`} onClick={handleSwitch}>
        {isLoginForm ? 'Login' : 'Signup'}
      </button>

      <div className="forms-container">
        {isLoginForm ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default SwitchableForm;

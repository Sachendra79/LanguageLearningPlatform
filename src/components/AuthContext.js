
import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
   
  //   const storedAuth = localStorage.getItem('auth');
  //   if (storedAuth === 'true') {
  //     setAuthenticated(true);
  //   }
  // }, []);

  // const login = () => {
  //   setAuthenticated(true);
  //   toast.success("You have entered")
  //   localStorage.setItem('auth', 'true');
  // };

  // const logout = () => {
  //   setAuthenticated(false);
  //   toast.dismiss("enter again")
  //   localStorage.setItem('auth', 'false');
  // };


  useEffect(() => {
    const storedAuth = Cookies.get('auth');
    if (storedAuth === 'true') {
      setAuthenticated(true);
    }
  }, []);
  
  const login = () => {
    setAuthenticated(true);
    toast.success("You have entered")
    Cookies.set('auth', 'true', { expires: 7 }); 
  };
  
  const logout = () => {
    setAuthenticated(false);
    toast.dismiss("enter again")
    Cookies.remove('auth');
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

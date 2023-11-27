
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setAuthenticated] = useState(false);

//   const login = () => setAuthenticated(true);
//   const logout = () => setAuthenticated(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated on page load
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const login = () => {
    setAuthenticated(true);
    localStorage.setItem('auth', 'true');
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.setItem('auth', 'false');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

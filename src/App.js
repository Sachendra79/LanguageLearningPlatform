
// import React from 'react';
// import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Otp from './pages/Otp';
// import Reset from './pages/Reset';
// import Dashboard from './pages/Dashboard';
// import Assignment from './pages/Assignment';
// import Cart from './pages/Cart';
// import Course from './pages/Course';
// import Support from './pages/Support';
// import Message from './pages/Message';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// // Import your AuthContext
// import Profile from './pages/Profile';
// import CourseDetailPage from './components/CourseDetailPage';
// import Category from './components/Category';
// import Search from './components/Search';
// import { useAuth } from './components/AuthContext';

// function App() {
//   const { isAuthenticated } = useAuth();

//   const ProtectedRoute = ({ element }) => {
//     return isAuthenticated ? element : <Navigate to="/" replace />;
//   };

//   return (
//     <div className="App">
 
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/otp" element={<Otp />} />
//           <Route path="/reset" element={<Reset />} />

      
//           <Route path="/home" element={<ProtectedRoute element={<Dashboard />} />} />
//           <Route path="/assignment" element={<ProtectedRoute element={<Assignment />} />}/>
//           <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
//           <Route path="/courses" element={<ProtectedRoute element={<Course />} />}/>
//           <Route path="/message" element={<ProtectedRoute element={<Message />} />}  />
//           <Route path="/support" element={<ProtectedRoute element={<Support />} />}  />
//           <Route path="/profile"  element={<ProtectedRoute element={<Profile />} />} />
//           <Route  path="/courses/detail/:course_uuid"  element={<ProtectedRoute element={<CourseDetailPage />} />} />
//           <Route path="/courses/:sector_uuid" element={<ProtectedRoute element={<Category />} />}  />
//           <Route path="/courses/search/:term"  element={<ProtectedRoute element={<Search />} />} />
//         </Routes>
    
//     </div>
//   );
// }

// export default App;

// App.js
// import React from 'react';
// import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Otp from './pages/Otp';
// import Reset from './pages/Reset';
// import Dashboard from './pages/Dashboard';
// import Assignment from './pages/Assignment';
// import Cart from './pages/Cart';
// import Course from './pages/Course';
// import Support from './pages/Support';
// import Message from './pages/Message';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';

// import Profile from './pages/Profile';
// import CourseDetailPage from './components/CourseDetailPage';
// import Category from './components/Category';
// import Search from './components/Search';
// import { useAuth } from './components/AuthContext';

// function App() {
//   const { isAuthenticated } = useAuth();

//   return (
//     <div className="App">
   
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/otp" element={<Otp />} />
//           <Route path="/reset" element={<Reset />} />

//           {isAuthenticated && (
//             <>
//               <Route path="/home" element={<Dashboard />} />
//               <Route path="/assignment" element={<Assignment />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/courses" element={<Course />} />
//               <Route path="/message" element={<Message />} />
//               <Route path="/support" element={<Support />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route
//                 path="/courses/detail/:course_uuid"
//                 element={<CourseDetailPage />}
//               />
//               <Route path="/courses/:sector_uuid" element={<Category />} />
//               <Route path="/courses/search/:term" element={<Search />} />
//             </>
//           )}

//           {/* Redirect to home if authenticated */}
//           {isAuthenticated ? <Navigate to="/home" /> : null}
//         </Routes>
  
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Otp from './pages/Otp';
import Reset from './pages/Reset';
import Dashboard from './pages/Dashboard';
import Assignment from './pages/Assignment';
import Cart from './pages/Cart';
import Course from './pages/Course';
import Support from './pages/Support';
import Message from './pages/Message';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useAuth } from './components/AuthContext';
import Profile from './pages/Profile';
import CourseDetailPage from './components/CourseDetailPage';
import Category from './components/Category';
import Search from './components/Search';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
  
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/reset" element={<Reset />} />

          {isAuthenticated ? (
            <>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/assignment" element={<Assignment />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/courses" element={<Course />} />
              <Route path="/message" element={<Message />} />
              <Route path="/support" element={<Support />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/courses/detail/:course_uuid"
                element={<CourseDetailPage />}
              />
              <Route path="/courses/:sector_uuid" element={<Category />} />
              <Route path="/courses/search/:term" element={<Search />} />
              <Route    path="/logout"  element={  <Navigate to="/" state={{ from: 'logout' }} /> }  /> </>
          ) : (
            <Route path="*" element={<Navigate to="/" />}  /> )}
        </Routes>
  
    </div>
  );
}

export default App;

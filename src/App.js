// import './App.css';
// import { Routes,Route } from 'react-router';
// import Login from './pages/Login';
// import Signup from './pages/Signup'
// import Otp from './pages/Otp';
// import Reset from './pages/Reset';
// import Dashboard from './pages/Dashboard';
// import Assignment from './pages/Assignment';
// import Cart from './pages/Cart';
// import Course from './pages/Course';
// import Support from './pages/Support';
// import Message from './pages/Message';
// import { BrowserRouter, useNavigate } from 'react-router-dom';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import { useState ,useEffect } from 'react';
// import Profile from './pages/Profile';
// import CourseDetailPage from './components/CourseDetailPage';
// import Category from './components/Category';
// import Search from './components/Search';

// function App() {
  

//   return (
//     <div className="App">
//    <Routes>
//             <Route  path="/" element={<Login/>} />
//             <Route  path='/signup' element={<Signup/>}  />
//             <Route  path='/otp' element={<Otp/>}  />
//             <Route  path='/reset' element={<Reset/>}  />
            
//             <Route  path='/home' element={<Dashboard/>}  />
//             <Route  path='/assignment' element={<Assignment/>}  />
//             <Route  path='/cart' element={<Cart/>}  />
//             <Route  path='/courses' element={<Course/>}  />
//             <Route  path='/message' element={<Message/>}  />
//             <Route  path='/support' element={<Support/>}  />
//             <Route  path='/profile' element={<Profile/>}  />
//             <Route path="/courses/detail/:course_uuid" element={<CourseDetailPage/>} />
//         <Route path="/courses/category/:sector_uuid" element={<Category />} />
//         <Route path="/courses/search/:term" element={<Search/>} />
//    </Routes>
   

//     </div>
//   );
// }

// export default App;
// App.js
import './App.css';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
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
import { useState } from 'react';
import Profile from './pages/Profile';
import CourseDetailPage from './components/CourseDetailPage';
import Category from './components/Category';
import Search from './components/Search';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset" element={<Reset />} />

        <Route path="/home" element={<Dashboard />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/message" element={<Message />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses/detail/:course_uuid" element={<CourseDetailPage />} />
        <Route path="/courses/:sector_uuid" element={<Category />} />
        <Route path="/courses/search/:term" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

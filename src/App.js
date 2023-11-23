import './App.css';
import { Routes,Route } from 'react-router';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Otp from './pages/Otp';
import Reset from './pages/Reset';
import Home from './pages/Home';
import Assignment from './pages/Assignment';
import Cart from './pages/Cart';
import Course from './pages/Course';
import Support from './pages/Support';
import Message from './pages/Message';

function App() {
  return (
    <div className="App">
     
   <Routes>
            <Route  path="/" element={<Login/>} />
            <Route  path='/signup' element={<Signup/>}  />
            <Route  path='/otp' element={<Otp/>}  />
            <Route  path='/reset' element={<Reset/>}  />
            <Route  path='/home' element={<Home/>}  />
            <Route  path='/assignment' element={<Assignment/>}  />
            <Route  path='/cart' element={<Cart/>}  />
            <Route  path='/course' element={<Course/>}  />
            <Route  path='/message' element={<Message/>}  />
            <Route  path='/support' element={<Support/>}  />

   </Routes>


    </div>
  );
}

export default App;

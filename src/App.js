import './App.css';
import { Routes,Route } from 'react-router';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Otp from './pages/Otp';
import Reset from './pages/Reset';

function App() {
  return (
    <div className="App">
     
   <Routes>
            <Route  path="/" element={<Login/>} />
            <Route  path='/signup' element={<Signup/>}  />
            <Route  path='/otp' element={<Otp/>}  />
            <Route  path='/reset' element={<Reset/>}  />

   </Routes>


    </div>
  );
}

export default App;

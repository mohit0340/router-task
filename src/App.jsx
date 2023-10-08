import { useEffect, useState } from 'react'
import Login from './components/user/Login'
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home'
import User from './components/User'
import Profiledata from './components/Profile-data'
import Contact from './components/Contact'
import Followers from './components/Followers'
import ProtectRoute from './components/ProtectRoute';
import Error from './components/Error '
import LoginContext from './components/LoginContext';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import { AnimatePresence, color } from 'framer-motion';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    localStorage.setItem("router-login",JSON.stringify({email:"mohit@gmail.com",password:"mohit123"}))
  })

  return (
    <div className=' container rounded' style={{height:"100vh"}}>
 
      <LoginContext>
        <AnimatePresence mode='wait'>
      <BrowserRouter key={location.pathname} location={location}>
      <ToastContainer position={'top-center'} autoClose={1500}/>



      <div className='d-flex justify-content-around bg-success-subtle rounded-2 mt-4 position-sticky'>
        <p className='fs-4 mt-3'>Routing-Task</p>
        <div className='d-flex justify-content-between mt-2 gap-5'>
      <Link to="/filter?Color=skyblue" className='fs-5 text-decoration-none text-dark p-2 mt-1'>Home</Link>
      <Link to="/contact" className='fs-5 text-decoration-none text-dark p-2 mt-1'>Contact</Link>
      <Link to="/user" className='fs-5 text-decoration-none text-dark p-2 mt-1'>Profile</Link>


      </div>

      </div>
      
      <Routes>
      <Route path='/filter' element={<Home/>}></Route>
      <Route path='/protect' element={<ProtectRoute/>}></Route>

      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/profiledata/:id/' element={<ProtectRoute Component={Profiledata}/>}>
      <Route path='followers/:id' element={<ProtectRoute Component={Followers}/>}></Route>

      </Route>



        <Route path='/user' element={<ProtectRoute Component={User}/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      
            <Route path='*' element={<ProtectRoute Component={Error}/>}></Route>
      </Routes>
      </BrowserRouter>
      </AnimatePresence>
      </LoginContext>
     
     
    </div>
  )
}

export default App

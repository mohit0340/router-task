import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { manageuser } from '../LoginContext'
import { useNavigate } from 'react-router-dom'
import Smoothroute from '../smoothrouting/Smoothroute'


const Login = () => {
const[email,setEmail]=useState("")
const navigate=useNavigate()
const[user,setUser]=useContext(manageuser)
const[password,setPassword]=useState("")
const data=JSON.parse(localStorage.getItem("router-login"))


const handlelogin=(e)=>{
  e.preventDefault()
  if(email=="" || password==""){
    toast.error("Please Enter Data in All field")

  }
  else{
    if(data.email!==email || data.password!==password){
    toast.error("Please Enter valid email And Password")

    }
    else{
      toast.success("You are Logged-in")
      setUser({email:email,password:password})
      navigate("/user")

    }
  }

}

  return (
    <Smoothroute>
    <div className='w-50 border d-flex justify-content-center bg-warning-subtle p-3 mt-4 rounded' style={{marginLeft:"25%"}}>
      
       <form className='w-75 d-flex flex-column gap-3' onSubmit={(e)=>handlelogin(e)}>
       <h2 className='text-center'>Login</h2>
       <div >

         <label>Username </label><br/>
         <input className='w-100 rounded border-dark border-1 p-1 bg-body-secondary' onChange={(e)=>setEmail(e.target.value)} type="text" />
      
       </div><br/> 
       <div >
         <label>Password </label><br/>
         <input type="password" className='w-100 rounded border-dark border-1 p-1 bg-body-secondary' onChange={(e)=>setPassword(e.target.value)}  />

       </div><br/>
      <button className='btn btn-outline-primary'>Submit</button>
     </form>
     
    </div>
    </Smoothroute>
  )
}

export default Login

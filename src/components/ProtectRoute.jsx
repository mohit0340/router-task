import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { manageuser } from './LoginContext'
import { useNavigate } from 'react-router-dom'
import Smoothroute from './smoothrouting/Smoothroute'



const ProtectRoute = (props) => {
    const {Component}=props
    const[user,setUser]=useContext(manageuser)
    const navigate=useNavigate()
useLayoutEffect(()=>{
if(user==""){
    navigate("/login")
}
},[])

  return (
    <div>
      <Smoothroute>
     
      <Component></Component>
      </Smoothroute>
    </div>
  )
}

export default ProtectRoute

import React, { createContext, useState } from 'react'


export const manageuser=createContext()
const LoginContext = (props) => {
    const [user,setUser]=useState("")
  return (
    <manageuser.Provider value={[user,setUser]}>
      {props.children}
    </manageuser.Provider>
  )
}

export default LoginContext

import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Smoothroute from './smoothrouting/Smoothroute'

const Home = () => {
const [searchparam,setSearchparam]=useSearchParams()
const[color,setColor]=useState("")
const param=searchparam.get("Color")


  return (
    <Smoothroute>
    <div style={{backgroundColor:param}} className='d-flex flex-column gap-4 p-5'>
      <input type='text' placeholder='Enter Color' className='w-50' onChange={(e)=>setColor(e.target.value)}></input>
      <button className='w-50 btn btn-outline-success' onClick={()=>setSearchparam({Color:`${color}`})}>Set Color</button>
      <h2>home</h2>
    </div>
    </Smoothroute>
  )
}

export default Home

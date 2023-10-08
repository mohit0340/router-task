import React, { useState } from 'react'
import Data from "../data.json"
import { useNavigate } from 'react-router-dom'
import Smoothroute from './smoothrouting/Smoothroute'



const User = () => {
const[data,setData]=useState(Data.data)
const navigate=useNavigate()

  return (
    <Smoothroute>

    <div className='d-flex flex-column gap-5 mt-4'>
      {
        data.map((item,index)=>(
          <div key={index} className='d-flex justify-content-between align-items-center bg-black text-light rounded-3 p-2'>
            <img src={item.image} className=' ms-3' style={{borderRadius:"40%",height:"150px", width:"150px"}}></img>
            <p className='fs-3 '>{item.name}</p>
            <button className='btn btn-outline-primary me-3' onClick={()=>{navigate(`/profiledata/${item.name}/`)}} style={{height:"50px"}}>View Profile</button>
          </div>
        ))

      }
    </div>
    </Smoothroute>

  )
}

export default User

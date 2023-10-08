import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Smoothroute from './smoothrouting/Smoothroute'


const Followers = () => {
  const param=useParams()
  const[followers,setFollowers]= useState(param.id.split(","))
 
  


  return (
    <Smoothroute>
    <div>
        <h2 className='text-center m-5 fs-1 fw-bold'>followers</h2>


        <div >{
          followers.map((item,index)=>(
            <p key={index} className=' bg-black text-light p-2 rounded'>{item}</p>
          ))
          
          }

        </div>
      
    </div>
    </Smoothroute>
  )
}

export default Followers
 
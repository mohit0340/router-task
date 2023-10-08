import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams,Outlet, useNavigate } from 'react-router-dom'
import Data from "../data.json"
import Smoothroute from './smoothrouting/Smoothroute'




const Profiledata = () => {
    const param=useParams()
    const navigate=useNavigate()

    const[data,setData]=useState("")
    // console.log(param.id)
    let showdata="";


    useEffect(
       ()=>{
   
      setData(  Data.data.filter((val)=>{
            return (val.name==param.id);
        }))
    
        console.log(data.name)
       },[]
    )


    const handlefollowers=(val)=>{
        navigate(`followers/${[val]}`)
        

    }
  
  return (
<Smoothroute>
    <div className='mt-5'>
        { data!=""?(

            <div className=' container bg-black text-light rounded'>


            {
                data.map((item,index)=>(
                    <div className='d-flex align-items-center justify-content-around p-3 ' key={index}>
                        <div className='d-flex flex-column align-items-center gap-2'>
                        <img src={"../."+item.image} className=' border-2 border-info' style={{height:"200px",width:"200px",borderRadius:"50%"}}></img>
                        
                    <p className='fs-4 text-capitalize'>{item.name}</p>
                    </div>
                    <div className='d-flex flex-column align-items-center justify-content-start p-2 rounded-2 ps-5 pe-5 bg-body-secondary text-dark' onClick={()=>handlefollowers(item.followers)}>
                    <p className='fs-4 fw-bold'>Followers</p>
                    <p className='fs-4 fw-bold'>{item.followers.length}</p>
                    </div>
                    </div>
                ))
            }
               
            </div>

         ):null 
        
        }
        

        <Outlet/>

      
    </div>
    </Smoothroute>
  )
}

export default Profiledata

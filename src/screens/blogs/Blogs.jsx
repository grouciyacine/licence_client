import React, { useEffect, useState } from 'react'
import './blog.scss'
import Navbar from '../../components/navbar/Navbar'
import Blog from '../blog/Blog' 
import axios from 'axios'
function Blogs() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/posts').then(res=>setData(res.data)).catch(err=>console.log(err))
    },[])
  return (
    <>
    <Navbar/>
        <div className='blogs'>
            {data?.map((da,key)=>(
                <Blog da={da} key={key}/>
            ))}
        </div>
    </>

  )
}

export default Blogs
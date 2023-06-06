import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './dd.scss'
import axios from 'axios'
import Red from '../../components/red/Red'
function DD() {
    const [data,setData]=useState()
    useEffect(()=>{
axios.get('http://127.0.0.1:8000/excel')
.then((data)=>setData(data.data))
.catch((err)=>console.log(err))
    },[])
return (
    <>
    <Navbar/>
    <div className='redaction'>
        <div className='red'>
                    {data?.map((da)=>(
                     <>
                     <br/>
                     <br/>
            <Red data={da}/>
                     </>   
        ))}
            </div>

    </div>
    </>
)
}

export default DD
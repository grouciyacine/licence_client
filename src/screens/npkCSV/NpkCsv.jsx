import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import Red2 from '../../components/red/Red2'

function NpkCsv() {
    const [data,setData]=useState()
    useEffect(()=>{
axios.get('http://127.0.0.1:8000/npk')
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
            <Red2 data={da}/>
                     </>   
        ))}
            </div>

    </div>
    </>
)
}

export default NpkCsv
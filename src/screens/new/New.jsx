import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import {useSelector} from 'react-redux'
import './new.scss'
import axios from 'axios';
function New() {
    const user=useSelector((state)=>state.user)
    const [blog,SetBlog]=useState({
      N:null,
      P:null,
      K:null,
      latitude:null,
      longtitude:null,
      altitude:null,
      dateNPK:null,
    })
      const handleSubmit=(e)=>{
          SetBlog((prev)=>({...prev,[e.target.name]:e.target.value}))
      }
      const handleClick=()=>{
        if(blog){
          axios.post('http://127.0.0.1:8000/posts',blog).then(alert('Data Added With Success')).catch(err=>console.log(err))
        }
      }
  return (
  <>  
  <Navbar/>
    <div className='container1'>
      <h1>Hi {user?.name}, Enter Your Data...</h1>
      <div className='formular'>
        <div className='total'>
                <form className='forma'>
                <h3>NPK:</h3>
                <div className='forma1'>
                  <h4> Date of NPK:</h4>
                  <input type='datetime-local'  name='dateNPK' onChange={handleSubmit}/>
                  </div>
                  <div className='forma1'>
                    <h4> Value of N:</h4>
                  <input type='number' placeholder='Enter Value of N' name='N'  onChange={handleSubmit}/> 
                  </div>
                  <div className='forma1'>
                    <h4>Value of P:</h4>
                  <input type='number' placeholder='Enter Value of P' name='P' onChange={handleSubmit}/> 
                  </div>
                  <div className='forma1'>
                    <h4>Value of K:</h4>
                  <input type='number' placeholder='Enter Value of K' name='K' onChange={handleSubmit}/> 
                  </div>
                  <div className='forma1'>
                    <h4>longitude of NPK:</h4>
                  <input type='number' placeholder='Enter Longitude ' name='longtitude' onChange={handleSubmit}/>
                  </div>
                  <div className='forma1'>
                    <h4>Altitude of NPK:</h4>
                  <input type='number' placeholder='Enter Altitude ' name='altitude' onChange={handleSubmit}/>
                  </div>
                  <div className='forma1'>
                    <h4>Latitude of NPK:</h4>
                  <input type='number' placeholder='Enter Latitude ' name='latitude' onChange={handleSubmit}/>
                  </div>
                </form>
        </div>
      </div>            
          <div>
    </div>
      <button className='button1' onClick={handleClick}>Submit</button>  
      <br/>
    
    </div>

  </>

  )
}

export default New
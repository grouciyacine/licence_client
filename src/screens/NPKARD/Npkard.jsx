import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import { useSelector } from 'react-redux'

function Npkard() {
    const user=useSelector((state)=>state.user)
    const [blog,SetBlog]=useState({
      NPkard_Value1:null,
      NPkard_Value2:null,
      NPkard_Value3:null,
      NPkard_Value4:null,
      NPkard_Value5:null,
      NPkard_Value6:null,
      NPkard_Value7:null,
      NPKard_Date:null,
      NPKard_long:null,
      NPKard_lat:null,
      NPKard_alt:null,
      NDvi_long:null,
      NDvi_lat:null,
      NDvi_alt:null,
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
                <h3>NPK ARDUINO:</h3>               
                <div className='forma1'>
                  <h4> Date of NPK ARDUINO:</h4>
                  <input type='datetime-local' name='NPKard_Date' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4> value1:</h4>
                  <input type='number' placeholder=' Value 1' name='NPkard_Value1' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4> value2:</h4>
                  <input type='number' placeholder=' Value 2' name='NPkard_Value2' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4> value3:</h4>
                  <input type='number' placeholder=' Value 3' name='NPkard_Value3' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4> value4:</h4>
                  <input type='number' placeholder=' Value 4' name='NPkard_Value4' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4> value5:</h4>
                  <input type='number' placeholder=' Value 5' name='NPkard_Value5' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4>value6:</h4>
                  <input type='number' placeholder=' Value 6' name='NPkard_Value6' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4> value7:</h4>
                  <input type='number' placeholder=' Value 7' name='NPkard_Value7' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4>Longitude of NPK ARDUINO:</h4>
                  <input type='number' placeholder='Enter Longitude ' name='NPKard_long' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4> Altitude of NPK ARDUINO:</h4>
                  <input type='number' placeholder='Enter Altitude ' name='NPKard_alt' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4>Latitude of NPK ARDUINO:</h4>
                  <input type='number' placeholder='Enter Latitude ' name='NPKard_lat' onChange={handleSubmit}/>
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

export default Npkard
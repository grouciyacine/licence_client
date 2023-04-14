import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import {useSelector} from 'react-redux'
import './new.scss'
import axios from 'axios';
function New() {
    const data=useSelector((state)=>state.user)
    console.log(data)
    const [blog,SetBlog]=useState({
      NDvi:"",
      NDvi_Date:"",
      N:'',
      P:"",
      K:"",
      N_lat:"",
      N_long:"",
      N_alt:"",
      N_Date:"",
      P_lat:"",
      p_long:"",
      P_alt:"",
      P_Date:"",
      K_lat:"",
      K_long:"",
      K_alt:"",
      K_Date:"",
      NPK_Date:"",
      NPkard_Value1:"",
      NPkard_Value2:"",
      NPkard_Value3:"",
      NPkard_Value4:"",
      NPkard_Value5:"",
      NPkard_Value6:"",
      NPkard_Value7:"",
      NPKard_Date:"",
      NPKard_long:"",
      NPKard_lat:"",
      NPKard_alt:"",
      NDvi_long:"",
      NDvi_lat:"",
      NDvi_alt:"",
      /*Camera_long:"",
      Camera_lat:"",
      Camera_alt:"",
      Camera:"",
      Camera_date:""*/
    })

      const handleSubmit=(e)=>{
          SetBlog((prev)=>({...prev,[e.target.name]:e.target.value}))
          
      }
      const handleClick=()=>{
        axios.post('http://127.0.0.1:8000/posts',blog).then(alert('Data Added With Success')).catch(err=>console.log(err))
      }
  return (
  <>  
  <Navbar/>
    <div className='container1'>
      <h1>Ha {data?.user_info?.userName} Enter Your Data...</h1>
      <div className='formular'>
        <div className='total'>
                <form className='forma'>
                  <h1 className='type'>NPK:</h1>
                    <h3>N</h3>
                    <div className='forma1'>
                    <h4>Enter Date of N:</h4>
                <input type='datetime-local' name='N_Date' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4>Enter Value of N:</h4>
                <input type='number' placeholder='Enter Value of N' name='N' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4>Enter Longitude of N:</h4>
                <input type='number' placeholder='Enter Longitude de N' name='N_long' onChange={handleSubmit}/>
                </div> 
                <div className='forma1'>
                  <h4>Enter Altitude of N:</h4>
                <input type='number' placeholder='Enter Altitude de N' name='N_alt' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4>Enter Latitude of N:</h4>
                <input type='number' placeholder='Enter Latitude de N' name='N_lat' onChange={handleSubmit}/>
                </div>
                <h3>P</h3>
                <div className='forma1'>
                <h4>Enter Date of P:</h4>
                <input type='datetime-local' name='P_Date' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4>Enter onChange of P:</h4>
                <input type='number' placeholder='Enter Value of P' name='P' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4>Enter Longitude of P:</h4>
                <input type='number' placeholder='Enter Longitude de P' name='P_long' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4>Enter Altitude of P:</h4>
                  <input type='number' placeholder='Enter Altitude de P' name='P_alt' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4>Enter Latitude of P:</h4>
                  <input type='number' placeholder='Enter Latitude de P' name='P_lat' onChange={handleSubmit}/>
                  </div>                
                <h3>K</h3>
                <div className='forma1'>
                  <h4>Enter Date of K:</h4>
                  <input type='datetime-local' name='K_Date' onChange={handleSubmit}/>
                  </div>
                  <div className='forma1'>
                    <h4>Enter onChange of k:</h4>
                  <input type='number' placeholder='Enter Value of K' name='K' onChange={handleSubmit}/>
                  </div>
                  <div className='forma1'>
                    <h4>Enter longitude of K:</h4>
                  <input type='number' placeholder='Enter Longitude de K' name='K_long' onChange={handleSubmit}/>
                  </div>
                  <div className='forma1'>
                    <h4>Enter Altitude of K:</h4>
                  <input type='number' placeholder='Enter Altitude de K' name='K_alt' onChange={handleSubmit}/>
                  </div>
                  <div className='forma1'>
                    <h4>Enter Latitude of K:</h4>
                  <input type='number' placeholder='Enter Latitude de K' name='K_lat' onChange={handleSubmit}/>
                  </div>
                </form>
                <form className='forma'>
                <h3>NDVI:</h3>
                <div className='forma1'>
                  <h4>Enter Date of NDVI:</h4>
                  <input type='datetime-local' name='NDvi_Date' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4>Enter Value of Value NDVI:</h4>
                  <input type='number' placeholder='Enter Value of NDVI' name='NDvi' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4>Enter Longitude of NDVI:</h4>
                  <input type='number' placeholder='Enter Longitude de NDVI' name='NDvi_long' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4>Enter Altitude of NDVI:</h4>
                  <input type='number' placeholder='Enter Altitude de NDVI' name='NDvi_alt' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4>Enter Latitude of NDVI:</h4>
                  <input type='number' placeholder='Enter Latitude de NDVI' name='NDvi_lat' onChange={handleSubmit}/>
                </div>
                </form>
                <form className='forma'>
                <h3>NPKARD:</h3>               
                <div className='forma1'>
                  <h4>Enter Date of NPKARD:</h4>
                  <input type='datetime-local' name='NPKard_Date' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4>Enter value1:</h4>
                  <input type='number' placeholder=' Value 1' name='NPkard_Value1' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4>Enter value2:</h4>
                  <input type='number' placeholder=' Value 2' name='NPkard_Value2' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4>Enter value3:</h4>
                  <input type='number' placeholder=' Value 3' name='NPkard_Value3' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4>Enter value4:</h4>
                  <input type='number' placeholder=' Value 4' name='NPkard_Value4' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4>Enter value5:</h4>
                  <input type='number' placeholder=' Value 5' name='NPkard_Value5' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4>Enter value6:</h4>
                  <input type='number' placeholder=' Value 6' name='NPkard_Value6' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4>Enter value7:</h4>
                  <input type='number' placeholder=' Value 7' name='NPkard_Value7' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4>Enter Longitude of NDVI:</h4>
                  <input type='number' placeholder='Enter Longitude de NDVI' name='NPKard_long' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                <h4>Enter Altitude of NDVI:</h4>
                  <input type='number' placeholder='Enter Altitude de NDVI' name='NPKard_alt' onChange={handleSubmit}/>
                </div>
                <div className='forma1'>
                  <h4><h4>Enter Latitude of NDVI:</h4></h4>
                  <input type='number' placeholder='Enter Latitude de NDVI' name='NPKard_lat' onChange={handleSubmit}/>
                </div>
                </form>
        </div>
      </div>
      <button className='button1' onClick={handleClick}>Submit</button>           
    </div>
  </>

  )
}

export default New
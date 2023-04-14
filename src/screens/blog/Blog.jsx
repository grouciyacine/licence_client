import React from 'react'
import './blog.scss'
function Blog({da}) {
  return (
    <div className='blog'>
        <div className='blog1'>
            <div className='bo'>
            <div className='bo'>
            <h2>N</h2>
            <h3>Value:{da?.N}</h3>
            <h4>GPS:</h4>
            <h3>Altitude:{da?.N_alt}</h3> 
            <h3>Longtitude:{da?.N_long}</h3> 
            <h3>Latitude:{da?.N_lat}</h3> 
            <h3>Date:{da?.N_Date}</h3> 
            </div>
            <div className='bo'>
            <h2>P</h2>
            <h3>Value :{da?.P}</h3>
            <h4>GPS:</h4>
            <h3>Altitude :{da?.P_alt}</h3> 
            <h3>Longtitude :{da?.P_long}</h3> 
            <h3>Latitude :{da?.P_lat}</h3> 
            <h3>Date:{da?.P_Date}</h3> 
            </div>
            <div className='bo'>
            <h2>K</h2>
            <h3>Value :{da?.K}</h3>
            <h4>GPS:</h4>
            <h3>Altitude:{da?.K_alt}</h3> 
            <h3>Longtitude:{da?.K_long}</h3> 
            <h3>Latitude:{da?.K_lat}</h3> 
            <h3>Date:{da?.K_Date}</h3>
            </div>

            </div>
            <div className='bo'>
            <h2>NDVI</h2>
            <h3>Value:{da?.NDvi}</h3>
            <h4>GPS:</h4>
            <h3>Altitude:{da?.NDvi_alt}</h3> 
            <h3>Longtitude:{da?.NDvi_long}</h3> 
            <h3>Latitude:{da?.NDvi_lat}</h3>
            <h3>Date:{da?.NDvi_Date}</h3> 
            </div>
            <div className='bo'>
            <h2>NPKArd</h2>
            <h3>Value1:{da?.NPkard_Value1}</h3>
            <h3>Value2:{da?.NPkard_Value2}</h3>
            <h3>Value3:{da?.NPkard_Value3}</h3>
            <h3>Value4:{da?.NPkard_Value4}</h3>
            <h3>Value5:{da?.NPkard_Value5}</h3>
            <h3>Value6:{da?.NPkard_Value6}</h3>
            <h3>Value7:{da?.NPkard_Value7}</h3>
            <h4>GPS:</h4>
            <h3>Altitude:{da?.NPKard_alt}</h3> 
            <h3>Longtitude:{da?.NPKard_long}</h3> 
            <h3>Latitude:{da?.NPKard_lat}</h3> 
            <h3>Date:{da?.NPKard_Date}</h3> 
            </div>
            
            </div>
        </div>
  )
}

export default Blog
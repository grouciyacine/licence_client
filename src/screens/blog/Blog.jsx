import React from 'react'
import './blog.scss'
function Blog({da}) {
  return (
    <div className='blog'>
        <div className='blog1'>
            <div className='bo'>
              
              {da?.N?
            <div className='bo'>
            <h2>NPK</h2>
            {da?.N?
            <h3>Value N:{da?.N}</h3>:""
          }
                      {da?.P?
            <h3>Value P:{da?.P}</h3>:""
          }
                      {da?.K?
            <h3>Value K:{da?.K}</h3>:""
          }
          <h4>GPS:</h4>
          {da?.altitude?
            <h3>Altitude:{da?.altitude}</h3>:""
          }
          {da?.longtitude?
            <h3>Longtitude:{da?.longtitude}</h3> :""
          }
                      {da?.latitude?
            <h3>Latitude:{da?.latitude}</h3>:""
          }
                      {da?.dataNPK?
            <h3>Date:{da?.dateNPK}</h3>:""
          }
            </div>              
              :
              ""
              }
</div>

{da.NDvi?            <div className='bo'>
            <h2>NDVI</h2>
            {da?.NDvi?
            <h3>Value:{da?.NDvi}</h3>:""
          }
          <h4>GPS:</h4>
                      {da?.NDvi_alt?
            <h3>Altitude:{da?.NDvi_alt}</h3> :""
          }
                      {da?.NDvi_lat?
            <h3>Latitude:{da?.NDvi_lat}</h3>:""
          }
                      {da?.NDvi_long?
            <h3>Longtitude:{da?.NDvi_long}</h3>:""
          }
                      {da?.NDvi_Date?
            <h3>Date:{da?.NDvi_Date}</h3>:""
          }
            </div>:""
}
{da.NPkard_Value1?  <div className='bo'>
            <h2>NPK Arduino</h2>
            {da?.NPkard_Value1?
            <h3>Value 1: {da?.NPkard_Value1}</h3>:""
          }
                       {da?.NPkard_Value2?
            <h3>Value 2: {da?.NPkard_Value2}</h3>:""
          }
                      {da?.NPkard_Value3?
            <h3>Value 3: {da?.NPkard_Value3}</h3>:""
          }
                      {da?.NPkard_Value4?
            <h3>Value 4: {da?.NPkard_Value4}</h3>:""
          }
                      {da?.NPkard_Value5?
            <h3>Value 5: {da?.NPkard_Value5}</h3>:""
          }
                      {da?.NPkard_Value6?
            <h3>Value 6: {da?.NPkard_Value6}</h3>:""
          }
                      {da?.NPkard_Value7?
            <h3>Value 7: {da?.NPkard_Value7}</h3>:""
          }
          <h4>GPS:</h4>
                      {da?.NPKard_alt?
            <h3>Altitude:{da?.NPKard_alt}</h3>:""
          }
                      {da?.NPKard_long?
            <h3>Longtitude: {da?.NPKard_long}</h3>:""
          } 
                                {da?.NPKard_lat?
            <h3>latitude: {da?.NPkard_lat}</h3>:""
          } 
                                {da?.NPKard_Date?
            <h3>Date: {da?.NPKard_Date}</h3>:""
          } 
            </div>:""
}

            
            </div>
        </div>
  )
}

export default Blog
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';

function Images() {
    const user=useSelector((state)=>state.user)
    const [ cover, setCever ] = useState();
      const handleClick=()=>{
        if(cover){
          const uploadData = new FormData();
          uploadData.append('cover', cover, cover.name);
          fetch('http://127.0.0.1:8000/api/books/', {
            method: 'POST',
            body: uploadData
          })
          .then( res => console.log(res))
          .catch(error => console.log(error))
        }
      }


  return (
  <>  
  <Navbar/>
    <div className='container1'>
      <h1>Hi {user?.name}, Enter Your Data...</h1>
      <div className='formular'>
        <div className='total'>

                <div className='forma1' style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <h4>Select Image:</h4>
                  <input type='file' accept='image/*'  id='img' style={{display:'none'}} onChange={(evt) => setCever(evt.target.files[0])}/>
                  <label htmlFor='img'>
                    <h4 className='file' style={{cursor:'pointer', backgroundColor:'#7be67b',padding:10,borderRadius:2}}>Select an Image</h4>
                  </label>
                </div>
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

export default Images
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useSelector } from 'react-redux';
import axios from 'axios';

function Curve() {
    const [selectedValue, setSelectedValue] = useState('');
    const [min_date,SetMin_date]=useState('');
    const [max_date,SetMax_date]=useState('');
    const [img,setImage]=useState('');
    const user = useSelector((state) => state.user);
    const handleClick =async (event) => {
      event.preventDefault()
      const inputDate = min_date;
      const formattedDate = inputDate.split('-').reverse().join('-');
      const inputDate1 = max_date;
      const formattedDate1 = inputDate1.split('-').reverse().join('-');
      console.log(formattedDate1)
        await axios.post('http://127.0.0.1:8000/api/api/N',{type:selectedValue,min_date:formattedDate,max_date:formattedDate1})
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
        setImage('http://127.0.0.1:8000/media/graph/ssss.png')
    }
    const handleSelectChange = (event) => {
          setSelectedValue(event.target.value);
        };
  return (
    <>
    <Navbar />
    <div className="container1">
      <h1>Hi {user?.name}, Enter Your Data...</h1>
      <div className="formular">
        <div className="total">
          <div className="forma1">
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<h4>Choose </h4>
            <select value={selectedValue} onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value="N">N</option>
        <option value="P">P</option>
        <option value="K">K</option>
        <option value="NDVI">NDVI</option>
      </select>
</div>
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <h4 > Date min:</h4>
            <input
              value={min_date}
              onChange={(e)=>SetMin_date(e.target.value)}
              type="date"
              id="file"
            />
    </div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <h4 > Date max:</h4>
            <input
              value={max_date}
              onChange={(e)=>SetMax_date(e.target.value)}
              type="date"
              id="file"
            />
    </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <button className="button1" onClick={handleClick}>
        Submit
      </button>
      <br/>
      {img?
      <img src={img}  alt=''/>:<h4></h4>
    }
      
    </div>
  </>
  )
}

export default Curve
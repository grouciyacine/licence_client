import React, { useState } from 'react'
import './register.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Register() {
    const [input,setInput]=useState({
        username:'',
        email:'',
        password:'',
        last_name:'',
        first_name:'',
    })
    const navigation=useNavigate()
    const handleChange=(e)=>{
        setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleClick=async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://127.0.0.1:8000/reg/',input)
            .then((res)=>console.log(res.data))
            .catch((e)=>console.log(e))
            navigation('/')
        }catch(e){
        console.log(e)
    }
    setInput("")
    }
  return (
    <div className='container'>
        <form className='form'>
            <h1>Register Now:</h1>
            <div className='user'>
                <h4>First Name:</h4>
                <input type='text' placeholder='Please Enter Your First Name' name='first_name' onChange={handleChange} />
            </div>
            <div className='user'>
                <h4>Last Name:</h4>
                <input type='text' placeholder='Please Enter Your Last Name' name='last_name' onChange={handleChange}/>
            </div>
            <div className='user'>
                <h4>Username:</h4>
                <input type='text' placeholder='Please Enter Your Username' name='username' onChange={handleChange}/>
            </div>
            <div className='user'>
                <h4>Password:</h4>
                <input type='password' placeholder='Please Enter Your Password' name='password' onChange={handleChange}/>
            </div>
            <div className='user'>
                <h4>Email :</h4>
                <input type='email' className='email' placeholder='Please Enter Your Email' name='email' onChange={handleChange}/>
            </div>
            <button onClick={handleClick}>Submit</button>
            <h6>
                You  have an account? <Link to='/login' >Login</Link>
            </h6>
        </form>
    </div>
  )
}

export default Register